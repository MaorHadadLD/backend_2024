import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true
    },
    owner: {
        type:String,
        required: true
    },
});

export default mongoose.model('Post', postSchema);