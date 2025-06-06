export const api_url =
  window.location.hostname === "localhost"
    ? "http://localhost:8000/api/v1"
    : "http://192.168.0.124:8000/api/v1";
