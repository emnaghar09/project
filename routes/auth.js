const express = require('express');
const auth = express.Router();


const {authSignIn , authSignUp,}= require('../controller/users.controller') 
const { addNewTrainig, displayTrainings, deleteTraining}= require('../controller/training.controller') 
const {addNewCalender}= require('../controller/calender.controller') 
const {isValid, validationSignIn, validationSignUp} = require('../middleware/validation')
const {isAuth} = require('../middleware/isAuth')


auth.post('/signup', isValid, validationSignUp, authSignUp )
auth.post('/signin',  isValid, validationSignIn, authSignIn)
auth.post('/addtrainig', addNewTrainig)
auth.get('/listtrainings', displayTrainings)
auth.post('/addcalender', addNewCalender)
auth.delete('/:ID', deleteTraining)
auth.get("/current", isAuth,(req, res) => {res.send(req.user)});
module.exports = auth