const Student = require('../models/student_model');


const getStudents = async (req, res) => {
    console.log('getStudent');
    try {
        const students = await Student.find();
        res.status(200).send(students);
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    } 
};

const getStudentById = (req, res) => {
    console.log(req.params.id);
    res.send("student get by id");
};

const postStudents = async (req, res) => {
    console.log("student post");
    try{
        const student = await Student.create(req.body);
        res.status(201).send(student);
    } catch (error) {
        res.status(400).send(error.massage);
    }
};


const putStudents = (req, res) => {
    res.send("student put");
};

const deleteStudents = (req, res) => {
    res.send("student delete");
};

module.exports = {getStudents, getStudentById, postStudents, putStudents, deleteStudents};