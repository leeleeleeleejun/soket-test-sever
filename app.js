import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

mongoose.connect(process.env.DB_KEY, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// DB
const db = mongoose.connection;
db.on("error", (error) => {
  console.error("MongoDB 연결 오류:", error);
});
db.once("open", () => {
  console.log("MongoDB 연결 성공");
});



export default app;