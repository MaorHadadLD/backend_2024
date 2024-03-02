import Student from '../models/studentModel';
import { Request, Response } from 'express'

const get = async (ItemModel, req: Request, res: Response) => {
    console.log('get');
    try {
        if (req.query.name) {
           const item = await ItemModel.find({name: req.query.name});
           res.status(200).send(item);
        } else {
            const item = await ItemModel.find();
            res.status(200).send(item);
        }
        
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    } 
};

// const getStudentById = async (req: Request, res: Response) => {
//     console.log(req.params.id);
//     try{
//         const student = await Student.findById(req.params.id);
//         if (student) {
//             res.status(200).send(student);
//         } else {
//             res.status(404).send("Student not found");
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(400).send(error.message);
//     }
// };

// const postStudents = async (req: Request, res: Response) => {
//     console.log("student post");
//     try{
//         const student = await Student.create(req.body);
//         res.status(201).send(student);
//     } catch (error) {
//         res.status(400).send(error.massage);
//     }
// };


// const putStudents = (req: Request, res: Response) => {
//     console.log("student put");
//     res.status(400).send("Not implemented");
// };

// const deleteStudents = async (req, res) => {
//     res.send("student delete");
//     try {
//         await Student.findByIdAndDelete(req.params.id);     
//         return res.status(200).send();  
//     } catch (error) {
//         console.log(error);
//         res.status(400).send(error.message);
//     };
// };

export default {
    get,
    // getStudentById,
    // postStudents, 
    // putStudents, 
    // deleteStudents,
};