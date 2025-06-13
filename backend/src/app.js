import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import jobRouter from "./routes/jobs.routes.js";
import companyRouter from "./routes/company.routes.js";
import messageRoutes from "./routes/message.routes.js";

export const app = express();
app.use(
  cors({
    origin: (origin, cb) =>
      [
        "http://localhost:5173",
        `http://${process.env.SYSTEM_PI}:5173`,
      ].includes(origin) || !origin
        ? cb(null, true)
        : cb(new Error("CORS not allowed")),
    credentials: true,
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/", jobRouter);
app.use("/api/v1/company/", companyRouter);
app.use("/api/v1/messages", messageRoutes);

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json(err);
  console.error("Error status:", err.statusCode || 500);
  console.error("Error message:", err.message);
  console.error("Stack trace:", err.stack);
});
