import Chat from "../DB/Models/chat.js";

const chatController = {
  saveChat: async (massage, user) => {
    const newMessage = new Chat({
      chat: massage,
      user: {id: user._id, name: user.name},
    })
    
    await newMessage.save();
    return newMessage;
  }
  
}

export default chatController