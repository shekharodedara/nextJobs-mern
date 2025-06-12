import { Message } from "../models/message.model.js";
import { User } from "../models/user.model.js";

export const getChatUsers = async (req, res) => {
  try {
    const userId = req.user._id;

    const messages = await Message.find({
      $or: [{ senderId: userId }, { receiverId: userId }],
    });

    const userIds = [
      ...new Set(
        messages.map((msg) =>
          msg.senderId.toString() === userId.toString()
            ? msg.receiverId.toString()
            : msg.senderId.toString()
        )
      ),
    ];

    const users = await User.find({ _id: { $in: userIds } })
      .select("_id username role userProfile");

    const formattedUsers = users.map((user) => {
      return {
        _id: user._id,
        username: user.username,
        role: user.role,
        displayName:
          user.role === "employer"
            ? user.userProfile?.companyName
            : user.userProfile?.fullName || user.username,
        avatar:
          user.role === "employer"
            ? user.userProfile?.companyLogo
            : user.userProfile?.profilePicture,
      };
    });

    res.json(formattedUsers);
  } catch (err) {
    res.status(500).json({ message: "Failed to load participants", error: err });
  }
};


export const getConversations = async (req, res) => {
  try {
    const userId = req.user._id;
    const otherUserId = req.params.otherUserId;

    const messages = await Message.find({
      $or: [
        { senderId: userId, receiverId: otherUserId },
        { senderId: otherUserId, receiverId: userId },
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

    res.status(201).json(newMsg);
  } catch (err) {
    res.status(500).json({ message: "Failed to send message", error: err });
  }
};
