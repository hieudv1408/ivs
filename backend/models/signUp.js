import mongoose from 'mongoose';
const { model, Schema } = mongoose;
export const signUpSchema = new Schema(
  {
    name: { type: String, required: true, index: true },
    email: { type: String, required: true, index: true },
  },
  {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  }
);

const UserModel = model('signUps', signUpSchema);
export default UserModel;
