import BaseController from "./baseController";
import Post, { IPost } from "../models/postModel";

const postController = new BaseController<IPost>(Post);

export default postController