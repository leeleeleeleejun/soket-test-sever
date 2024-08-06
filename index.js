import {createServer} from "http";
import app from "./app.js";
import {Server} from "socket.io"
import dotenv from "dotenv";
import ioFunc from "./utils/io.js";
dotenv.config();

const httpServer = createServer(app);
const io = new Server(httpServer,{
  cors:{
    origin: 'http://localhost:5173',
  }
});

ioFunc(io)


const PORT = process.env.PORT || 3001;

httpServer.listen(PORT, () => {
  console.log("hello");
});