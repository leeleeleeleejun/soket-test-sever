import User from "../DB/Models/user.js";

const userController = {
  saveUser: async (name, id) => {
      let user = await User.findOne({name});
      
      if (!user) {
        user = new User({name,token: id, online: true});
      }
      
      user.token = id;
      user.online = true;
      
      await user.save();
      
      return user;
  },
  checkUser: async (id) => {
    let user = await User.findOne({token: id});
    if(!user) throw new Error("User not found");
    return user;
  }
}

export default userController;