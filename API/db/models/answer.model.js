const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
    //foreign key to userid
    answer_content: {
        type: String,
        required: true,
        minlength: 1,
        trim: false,
    },

    username: {
        type: String,
        required: true
    },
    //foreign key to questions
    _questionId: {
        type: mongoose.Types.ObjectId,
        required: true
    }
});

const Answers = mongoose.model('Answers', AnswerSchema);

module.exports = { Answers }