import { apiCall } from "./apiBase";

export function getChatUsers() {
  return apiCall("get", "/messages/participants");
}

export function getConversation(otherUserId) {
  return apiCall("get", `/messages/conversations/${otherUserId}`);
}

export function sendMessage(data) {
  return apiCall("post", "/messages/send", data);
}
