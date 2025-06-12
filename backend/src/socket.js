import { Server } from "socket.io";

let io;

export const initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: ["http://localhost:5173", `http://${process.env.SYSTEM_PI}:5173`],
      methods: ["GET", "POST"],
      credentials: true
    }
  });

  io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id);

    socket.on("joinChat", (userId) => {
      socket.join(userId);
    });

    socket.on("sendMessage", ({ senderId, receiverId, message }) => {
      io.to(receiverId).emit("receiveMessage", { senderId, message });
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected:", socket.id);
    });
  });
};

export const getIO = () => io;
