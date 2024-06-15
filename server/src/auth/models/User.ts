import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  email: string;
  username?: string;
  password: string;
  userImage?: string;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required:false },
  password: { type: String, required: true },
  userImage: { type: String, required: false, default: "https://univerlss.ru/wp-content/uploads/2020/08/nophoto.png"},
});

export default mongoose.model<IUser>("User", UserSchema);
