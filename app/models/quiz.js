var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quizSchema = new Schema({
    name: String,
    answer: [{
        text: String,
        answers: [{
            answer_1: String,
            answer_2: String,
            answer_3: String
        }]
    }]
});

module.exports = mongoose.model('quiz', quizSchema);
