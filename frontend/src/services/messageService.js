import { apiCall } from "./apiBase";

// services/messageService.js
export function getChatUsers() {
  return apiCall("get", "/messages/participants");
}

export function getConversation(otherUserId) {
  return apiCall("get", `/messages/conversations/${otherUserId}`);
}

export function sendMessage(data) {
  return apiCall("post", "/messages/send", data);
}
