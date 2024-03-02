import Post from '../models/postModel';
import { Request, Response } from 'express'
import baseController from '../controllers/baseController';
const getPost = async (req: Request, res: Response) => {
    console.log('getStudent');
    baseController.get(Post, req, res);
};

export default { getPost };