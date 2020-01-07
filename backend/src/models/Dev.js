import { Schema, model } from 'mongoose';

const DevSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
    },
    user: {
      type: String,
      required: true,
    },
    bio: String,
    public_repos: String,
    followers: String,
    avatar: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export default model('Dev', DevSchema);
