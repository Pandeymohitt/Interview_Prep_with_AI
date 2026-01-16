import dotenv from "dotenv";
dotenv.config({ path: "./Backend/.env" });

import path from "path";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./config/DB.js";

import userRouter from "./Routes/user.routes.js";
import sessionRouter from "./Routes/session.routes.js";
import questionRoute from "./Routes/question.route.js";

const app = express();
const __dirname = path.resolve();

// 🔍 DEBUG
console.log("PORT:", process.env.PORT);

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://ai-interview-preperation-1.onrender.com",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/session", sessionRouter);
app.use("/api/v1/question", questionRoute);

// Serve frontend
app.use(express.static(path.join(__dirname, "../Frontend/dist")));
app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, "../Frontend/dist/index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  connectDB();
  console.log(`✅ Server started on port ${port}`);
});
