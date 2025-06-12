import dotenv from "dotenv";
import { connectDB } from "./db/db.js";
import { app } from "./app.js";
import http from "http";
import { initSocket } from "./socket.js";

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);
initSocket(server);

connectDB()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server running with sockets at port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`DB Connection failed: ${error}`);
  });