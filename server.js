var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = express.Router();

var Quiz = require('./app/models/quiz');

router.use(function(req, res, next) {
  console.log('req ' + req, 'res' + res);
  next(); // goes to the next route, don't stop
})

// test api route
app.get('/api', function(req, res) {
    res.json({ message: 'yo man this is working for reals'});
})

router.route('/quiz')

  .post(function (req,res) {

    var quiz = new Quiz();

    quiz.name = req.body.name;

    quiz.save(function (err) {
      if (err) {
        res.send(err);
        res.json({message: 'error'});
      }
      res.json({message: 'quiz added with name ' + quiz.name });
    })
  })

  .get(function(req, res){
    Quiz.find(function(err, quiz) {
        if (err) {
          res.send(err)
        }
        res.json(quiz);
    })
  })

router.route('/quiz/:quiz_id')
  .get(function (req, res) {
      Quiz.findById(req.params.quiz_id, function(err, quiz){
        if (err) {
          res.send(err)
        }
        res.json(quiz)
      })
  })

  .put(function(req, res){
    Quiz.findById(req.params.quiz_id, function(err, quiz){
      if (err) {
        res.send(err)
      }
      quiz.name = req.body.name; // new name

      quiz.save(function(err){
        if (err) {
          res.send(err)
        }
        res.json({message: 'quiz name updated'})
      })

    })
  })

  .delete(function(req, res){
    Quiz.remove({
        _id: req.params.quiz_id
      }, function(err, quiz) {
        if (err) {
          res.send(err)
        }
        res.json({message: 'quiz deleted'});
      })
    })





// Register routes here
// ====================
// All routes to be prefixed with /api
app.use('/api', router);
app.listen(port); // open connection
console.log('Magic on port: ' + port); // test connection is working

// var mongoose = var module = require('module');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');


// Serve static files
app.use('/',express.static(__dirname + '/public'));
