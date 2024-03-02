import Student from '../models/studentModel';
import { Request, Response } from 'express';
import baseController from '../controllers/baseController';

const getStudents = async (req: Request, res: Response) => {
    console.log('getStudent');
    baseController.get(Student, req, res);
};

const getStudentById = async (req: Request, res: Response) => {
    console.log(req.params.id);
    baseController.getById(Student, req, res);
};

const postStudents = async (req: Request, res: Response) => {
    console.log("student post");
    baseController.post(Student, req, res);
};


const putStudents = (req: Request, res: Response) => {
    console.log("student put");
    res.status(400).send("Not implemented");
};

const deleteStudents = async (req, res) => {
    console.log("student delete");
    baseController.remove(Student, req, res);
};

export default {
    getStudents,
    getStudentById,
    postStudents, 
    putStudents, 
    deleteStudents,
};