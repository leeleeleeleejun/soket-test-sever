import { Schema, model } from "mongoose";

const ChatSchema = new Schema({
  chat: {type: String},
  user: {id: {type: Schema.Types.ObjectId, ref: "User"},name: {type: String}},
},{
  timestamps: true
})

export default model("Chat", ChatSchema);