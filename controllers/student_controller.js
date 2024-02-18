const Student = require('../models/student_model');


const getStudents = async (req, res) => {
    console.log('getStudent')

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

const myfunc = () => {
    const rs = new Promise((resolve, reject) => {
        console.log('myfunc');
        resolve('ok');
    });
    return rs;
};

const putStudents =  (req, res) => {
    myfunc().then((rs) => {
        console.log(rs);
        res.send("student put");
    }).catch((error) => {
        console.log(error);
    });

    
};

const deleteStudents = (req, res) => {
    res.send("student delete");
};

module.exports = {getStudents, getStudentById, postStudents, putStudents, deleteStudents};