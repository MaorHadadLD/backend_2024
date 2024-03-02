"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const studentModel_1 = __importDefault(require("../models/studentModel"));
const getStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('getStudent');
    try {
        let students;
        if (req.query.name) {
            students = yield studentModel_1.default.find({ name: req.query.name });
        }
        else {
            students = yield studentModel_1.default.find();
        }
        res.status(200).send(students);
    }
    catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
});
const getStudentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.params.id);
    try {
        const student = yield studentModel_1.default.findById(req.params.id);
        if (student) {
            res.status(200).send(student);
        }
        else {
            res.status(404).send("Student not found");
        }
    }
    catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
});
const postStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("student post");
    try {
        const student = yield studentModel_1.default.create(req.body);
        res.status(201).send(student);
    }
    catch (error) {
        res.status(400).send(error.massage);
    }
});
const putStudents = (req, res) => {
    console.log("student put");
    res.status(400).send("Not implemented");
};
const deleteStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("student delete");
    try {
        yield studentModel_1.default.findByIdAndDelete(req.params.id);
        return res.status(200).send();
    }
    catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
    ;
});
exports.default = {
    getStudents,
    getStudentById,
    postStudents,
    putStudents,
    deleteStudents,
};
//# sourceMappingURL=student_controller.js.map