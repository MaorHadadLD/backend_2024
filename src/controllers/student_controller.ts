import Student from "../models/studentModel";
import BaseController from "./baseController";
import { IStudent } from "../models/studentModel";

class StudentController extends BaseController<IStudent> {
  constructor() {
    super(Student);
  }

}

export default new StudentController();