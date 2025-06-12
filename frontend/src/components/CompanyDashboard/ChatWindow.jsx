import React, { useEffect, useRef } from "react";

const ChatWindow = ({
  messages,
  currentUserId,
  input,
  setInput,
  onSend,
  bgColor,
  selectedUserName,
  selectedUserProfile,
  currentUserProfile,
}) => {
  return (
    <div className={`flex flex-col flex-grow ${bgColor} p-4`}>
      <div className="font-bold text-xl mb-4">{selectedUserName}</div>
      <div className="flex-grow overflow-y-auto">
        {messages && messages.map((msg) => {
          const isCurrentUser = msg.senderId === currentUserId;
          const profilePic = isCurrentUser ? currentUserProfile : selectedUserProfile;

          return (
            <div
              key={msg._id}
              className={`flex mb-2 items-center ${
                isCurrentUser ? "justify-end" : "justify-start"
              }`}
            >
              {!isCurrentUser && (
                <img
                  src={profilePic}
                  alt="profile"
                  className="w-8 h-8 rounded-full mr-2"
                />
              )}
              <div
                className={`p-2 rounded ${
                  isCurrentUser ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
                } max-w-xs`}
              >
                {msg.text}
              </div>
              {isCurrentUser && (
                <img
                  src={profilePic}
                  alt="profile"
                  className="w-8 h-8 rounded-full ml-2"
                />
              )}
            </div>
          );
        })}
      </div>

      <form onSubmit={onSend} className="mt-4 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow border rounded p-2"
          placeholder="Type a message"
        />
        <button type="submit" className="ml-2 bg-blue-600 text-white px-4 rounded">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;
