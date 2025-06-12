import { Router } from "express";
import {
  getConversations,
  getChatUsers,
  sendMessage,
} from "../controllers/message.controllers.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Get all chat participants for current user
router.get("/participants", verifyJWT, getChatUsers);

// Get conversation between current user and another
router.get("/conversations/:otherUserId", verifyJWT, getConversations);

// Send a message
router.post("/send", verifyJWT, sendMessage);

export default router;
