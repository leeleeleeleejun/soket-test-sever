import userController from "../controllers/user.controller.js";
import chatController from "../controllers/chat.controller.js";

const ioFunc = (io) => {
  io.on('connection', async (socket) => {
    console.log('Connection connected' + socket.id);
    
    socket.on('login', async (name, cb) => {
      console.log(name);
      const user = await userController.saveUser(name, socket.id);
      
      cb({ok: true, user});
    })
    
    socket.on('sendMessage', async (message, cb) => {
      const user = await userController.checkUser(socket.id);
      const newMessage = await chatController.saveChat(message, user);
      
      io.emit('message', newMessage);
      cb({ok: true, user});
    })
    
    socket.on('disconnect', () => {
      console.log('Disconnected');
    })
  })
}

export default ioFunc