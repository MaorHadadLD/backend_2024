import Post from '../models/postModel';
import { Request, Response } from 'express'

const getPost = async (req: Request, res: Response) => {
    console.log('getStudent');
    try {
        const post = await Post.find();
        res.status(200).send(post);
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    } 
};

export default { getPost };