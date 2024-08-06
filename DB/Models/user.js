import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: true, unique: true },
  token:{type:String},
  online:{type:Boolean, default: false},
})

export default model("User", UserSchema);