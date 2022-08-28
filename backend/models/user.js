import mongoose from 'mongoose';
const { model, Schema } = mongoose;
export const UserSchema = new Schema(
  {
    username: { type: String, unique: true, required: true, index: true },
    password: { type: String, required: true },
  },
  {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  }
);

const UserModel = model('users', UserSchema);
export default UserModel;
