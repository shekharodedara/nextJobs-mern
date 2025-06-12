import { Message } from "../models/message.model.js";
import { User } from "../models/user.model.js";
import mongoose from "mongoose";
import { getIO } from "../socket.js";

export const getChatUsers = async (req, res) => {
  try {
    const userId = req.user._id;
    const messages = await Message.find({
      $or: [{ senderId: userId }, { receiverId: userId }],
    });

    if (messages.length === 0) {
      const users = await User.find().select("_id username role userProfile");
      return res.json(users);
    }

    const userIds = [
      ...new Set(
        messages.map((msg) =>
          msg.senderId.toString() === userId.toString()
            ? msg.receiverId.toString()
            : msg.senderId.toString()
        )
      ),
    ];

    const users = await User.find({ _id: { $in: userIds } }).select(
      "_id username role userProfile"
    );

    res.json(users);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to load participants", error: err });
  }
};

export const getConversations = async (req, res) => {
  try {
    const userId = req.user._id;
    const otherUserId = req.params.otherUserId;

    const messages = await Message.find({
      $or: [
        {
          senderId: new mongoose.Types.ObjectId(userId),
          receiverId: otherUserId,
        },
        {
          senderId: otherUserId,
          receiverId: new mongoose.Types.ObjectId(userId),
        },
      ],
    }).sort({ createdAt: 1 });

    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: "Failed to get messages", error: err });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { receiverId, text } = req.body;

    const newMsg = await Message.create({
      senderId: req.user._id,
      receiverId,
      text,
    });

    const io = getIO();
    io.to(receiverId).emit("receiveMessage", {
      senderId: req.user._id,
      text,
      _id: newMsg._id,
      createdAt: newMsg.createdAt,
    });

    res.status(201).json(newMsg);
  } catch (err) {
    res.status(500).json({ message: "Failed to send message", error: err });
  }
};
