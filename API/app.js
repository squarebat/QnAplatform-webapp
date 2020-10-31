const express = require('express');
const app = express();

const { Users, Questions, Answers } = require('./db/models/');
const mongoose = require('./db/mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
//load middleware
app.use(bodyParser.json());
app.use(cors());

//get all users 
app.get('/users', (req, res) => {
    Users.find().then((users) => {
        res.send(users);
    }).catch((e) => {
        res.send(e);
    })
});
//create a user
app.post('/users', (req, res) => {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;

    let newUser = new Users({
        username,
        email,
        password
    });
    newUser.save().then((userDoc) => {
        res.send(userDoc);
    })

});

//update a user
app.patch('/users/:id', (req, res) => {
    Users.findOneAndUpdate({ _id: req.params.id }, {
        $set: req.body
    }).then(() => {
        res.sendStatus(200);
    });
});

//delete a user
app.delete('/users/:id', (req, res) => {
    Users.findOneAndRemove({
        _id: req.params.id
    }).then((removedUserDoc) => {
        res.send(removedUserDoc);
    });
});

//question and answer management
app.get('/questions', (req, res) => {
    Questions.find().then((questions) => {
        res.send(questions);
    }).catch((e) => {
        res.send(e);
    })
});

app.get('/questions/:_questionId', (req, res) => {
    Questions.find({_id : req.params._questionId}).then((questions) => {
        res.send(questions);
    }).catch((e) => {
        res.send(e);
    })
});
//create a question
app.post('/questions', (req, res) => {
    let question_string = req.body.question_string;
    let username = req.body.username;
    let newQuestion = new Questions({
        question_string,
        username
    });
    newQuestion.save().then((questionDoc) => {
        res.send(questionDoc);
    });

});

//update a question
app.patch('/questions/:id', (req, res) => {
    Questions.findOneAndUpdate({ _id: req.params.id }, {
        $set: req.body
    }).then(() => {
        res.sendStatus(200);
    });
});

//delete a question
app.delete('/questions/:id', (req, res) => {
    Questions.findOneAndRemove({
        _id: req.params.id
    }).then((removedQuestionsDoc) => {
        res.send(removedQuestionsDoc);
    });
});

//get all answers for the question
app.get('/questions/:questionId/answers', (req, res) => {
    Answers.find({
        _questionId: req.params.questionId
    }).then((answers) => {
        res.send(answers);
    })
})

//add a new answer for the question
app.post('/questions/:questionId/answers', (req, res) => {
    let newAnswer = new Answers({
        answer_content: req.body.answer_content,
        username: req.body.username,        
        _questionId: req.params.questionId
    });
    newAnswer.save().then((answerDoc) => {
        res.send(answerDoc);
    });
})

//update an answer
app.patch('/questions/:questionId/answers/:answerId', (req, res) => {
    Answers.findOneAndUpdate({
        _id: req.params.answerId,
        _questionId: req.params.questionId
    }, {
            $set: req.body
        }).then(() => {
            res.sendStatus(200);
        });
});

//delete an answer
app.delete('/questions/:questionId/answers/:answerId', (req, res) => {
    Answers.findOneAndRemove({
        _id: req.params.answerId,
        _questionId: req.params.questionId
    }).then((removedAnswersDoc) => {
        res.send(removedAnswersDoc);
    });
});

let port = 8080;
app.listen(port, () => {
    console.log("Server now active on port " + port + "!");
})
