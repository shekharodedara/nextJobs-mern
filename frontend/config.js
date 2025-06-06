export const api_url =
  window.location.hostname === "localhost"
    ? "http://localhost:8000/api/v1"
    : `http://${window.location.hostname}:8000/api/v1`; // in case you run on your IP