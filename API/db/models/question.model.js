const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    //foreign key to userid
    question_string: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
    },

    username: {
        type: String,
        required: true
    },
    
    //foreign key to answers
});

const Questions = mongoose.model('Questions', QuestionSchema);

module.exports = { Questions }