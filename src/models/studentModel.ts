import mongoose from 'mongoose';

export interface IStudent {
    name: string;
    _id: string;
    age: number;
}
const studentSchema = new mongoose.Schema ({
    name: {
        type : String,
        required: true
    },
    _id: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },

});

export default mongoose.model('Student', studentSchema);