import BaseController from "./baseController";
import Post, { IPost } from "../models/postModel";


class PostController extends BaseController<IPost> {
    constructor() {
        super(Post);
    }
}

export default new PostController();