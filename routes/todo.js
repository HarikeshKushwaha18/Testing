const express = require('express');

const router = express.Router();

const {createToDo} = require('../controllers/createToDo');
const {getToDo, getToDoById}  = require('../controllers/getToDo');
const {updateToDo} = require('../controllers/updateToDo');

router.post('/createToDo', createToDo);
router.get('/getToDo', getToDo);
router.get('/getToDo/:id', getToDoById);
router.put('/updateToDo/:id', updateToDo);

module.exports = router;