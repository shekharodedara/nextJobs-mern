import React, { useEffect, useRef } from "react";

const ChatWindow = ({
  messages,
  currentUserRole,
  input,
  setInput,
  onSend,
  bgColor,
  selectedUserName,
}) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className={`flex flex-col flex-1 ${bgColor}`}>
      <div className="p-4 bg-white border-b font-semibold">{selectedUserName}</div>

      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages && messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-[70%] px-4 py-2 rounded-lg ${
              msg.senderId === currentUser._id
                ? "bg-green-100 self-end ml-auto text-right"
                : "bg-blue-100 self-start mr-auto text-left"
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={onSend} className="flex p-4 border-t bg-white">
        <input
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;
