import mongoose, { model, Schema, Document } from "mongoose";
import { config } from "./config";

const DATABASE_NAME = config.dbName;
const MONGODB_URL = config.mongodbUrl;

export const dbConnect = async function () {
  try {
    if (!config.mongodbUrl) throw new Error("MONGODB URL is not defined.");
    if (!config.dbName) throw new Error("DATABASE NAME is not defined.");

    await mongoose.connect(`${MONGODB_URL}`);
    console.log("Database connected successfully.");
  } catch (error) {
    console.error("Database connection error: ", error);
    process.exit(0);
  }
};

export interface IContent extends Document {
  type: string;
  title: string;
  link: string;
  tags: mongoose.Schema.Types.ObjectId[];
  userId: mongoose.Schema.Types.ObjectId;
  sharableId?: string;
}

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: String,
});
const ContentSchema = new Schema<IContent>({
  type: {
    type: String,
    enum: ["document", "tweet", "youtube", "link"],
    required: true,
  },
  title: String,
  link: String,
  tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
const TagSchema = new Schema({
  tagName: {
    type: String,
    unique: true,
    trim: true,
  },
});
const LinkSchema = new Schema({
  hash: String,
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    unique: true,
    require: true,
  },
});

const UserModel = model("User", UserSchema);
const ContentModel = model<IContent>("Content", ContentSchema);
const TagModel = model("Tag", TagSchema);
const LinkModel = model("Link", LinkSchema);

export { UserModel, ContentModel, TagModel, LinkModel };
