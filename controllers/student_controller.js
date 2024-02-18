const Student = require('../models/student_model');


const getStudents = async (req, res) => {
    console.log('getStudent')

};

const getStudentById = (req, res) => {
    console.log(req.params.id);
    res.send("student get by id");
};

const postStudents = async (req, res) => {
    res.send("student post" + req.body);

    const student = await Student.create(req.data);
    res.status(201).send();
};

const putStudents = (req, res) => {
    res.send("student put");
};

const deleteStudents = (req, res) => {
    res.send("student delete");
};

module.exports = {getStudents, getStudentById, postStudents, putStudents, deleteStudents};