import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ChatWindow from "./ChatWindow";
import {
  getChatUsers,
  getConversation,
  sendMessage,
} from "../../services/messageService";

const Messages = () => {
  const currentUser = useSelector((store) => store.auth.userData);
  const [chatUsers, setChatUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (!currentUser) return;
    const fetchChatUsers = async () => {
      try {
        const res = await getChatUsers(currentUser._id);
        setChatUsers(res);
        let filtered = [];
        if (currentUser.role === "jobSeeker") {
          filtered = res.filter((u) => u.role !== "jobSeeker");
        } else {
          filtered = res.filter((u) => u.role === "jobSeeker");
        }
        setFilteredUsers(filtered);
        if (filtered.length > 0) setSelectedUserId(filtered[0]._id);
      } catch (err) {
        console.error("Error loading chat users", err);
      }
    };
    fetchChatUsers();
  }, [currentUser]);

  useEffect(() => {
    if (!currentUser || !selectedUserId) return;
    const fetchMessages = async () => {
      try {
        const res = await getConversation(selectedUserId);
        setMessages(res);
      } catch (err) {
        console.error("Error loading messages", err);
      }
    };
    fetchMessages();
  }, [selectedUserId, currentUser]);
  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newMsg = {
      senderId: currentUser._id,
      receiverId: selectedUserId,
      text: input,
    };
    try {
      const sentMsg = await sendMessage(newMsg);
      setMessages((prev) => [...prev, sentMsg]);
      setInput("");
    } catch (err) {
      console.error("Failed to send message", err);
    }
  };
  if (!currentUser) {
    return <div className="p-4">Loading user info...</div>;
  }
  const selectedUser = filteredUsers.find((u) => u._id === selectedUserId);
  const bgColor =
    selectedUser?.role === "jobSeeker" ? "bg-yellow-50" : "bg-pink-50";
  return (
    <div className="flex h-screen">
      <div className="w-64 bg-white border-r overflow-y-auto">
        <div className="p-4 font-bold text-xl border-b">Messages</div>
        <ul className="divide-y">
          {filteredUsers.map((user) => (
            <li
              key={user._id}
              className={`p-4 cursor-pointer hover:bg-blue-50 ${
                user._id === selectedUserId ? "bg-blue-100 font-semibold" : ""
              }`}
              onClick={() => setSelectedUserId(user._id)}
            >
              <div className="flex items-center">
                <img
                  src={
                    user?.role === "jobSeeker"
                      ? user.userProfile.profilePicture
                      : user.userProfile.companyLogo || "/default-profile-pic.png"
                  }
                  alt={user.username}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <span>{user.username}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <ChatWindow
        messages={messages}
        currentUserId={currentUser._id}
        input={input}
        setInput={setInput}
        onSend={handleSend}
        bgColor={bgColor}
        selectedUserName={selectedUser?.username}
        selectedUserProfile={
          selectedUser?.role === "jobSeeker"
            ? selectedUser?.userProfile.profilePicture
            : selectedUser?.userProfile.companyLogo || "/default-profile-pic.png"
        }
        currentUserProfile={
          currentUser.role === "jobSeeker"
            ? currentUser.userProfile.profilePicture
            : currentUser.userProfile.companyLogo || "/default-profile-pic.png"
        }
      />
    </div>
  );
};

export default Messages;
