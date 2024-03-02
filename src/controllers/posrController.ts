import Post from '../models/postModel';
import { Request, Response } from 'express'
import baseController from '../controllers/baseController';

const getPost = async (req: Request, res: Response) => {
    console.log('getStudent');
    baseController.get(Post, req, res);
};

const getPostById = async (req: Request, res: Response) => {
    console.log(req.params.id);
    baseController.getById(Post, req, res);
};

const postPost = async (req: Request, res: Response) => {
    console.log("student post");
    baseController.post(Post, req, res);
};

const putPost = (req: Request, res: Response) => {
    console.log("student put");
    res.status(400).send("Not implemented");
};

const deletePost = async (req, res) => {
    console.log("student delete");
    baseController.remove(Post, req, res);
};



export default { 
    getPost, 
    getPostById, 
    postPost, 
    putPost, 
    deletePost
};