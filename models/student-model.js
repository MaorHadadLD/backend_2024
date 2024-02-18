const mongoose = require ('mongoose');

const studentSchema = newmogoose.Schema ({
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

module.exports = mongoose.model('Student', studentSchema);