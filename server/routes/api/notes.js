const express = require('express')
const router = express.Router()
const tasks = require("../../controllers/task.controller")
const users = require("../../controllers/user.controller")

router.get('/json', function (req, res){
    res.json([{ id: 1, message: "siema bartek"}, { id: 2, message: "siema kamil"}])
})


router.post('/tasks/create', tasks.create)
router.post('/users/create', users.create)

router.get('/tasks/:id', tasks.findOne)
router.get('/users/:id', users.findOne)

router.get('/tasks/find/all', tasks.findAll)
router.get('/users/find/all', users.findAll)

router.patch('/tasks/edit/:id', tasks.update)
router.post('/users/addtask', users.update)

router.delete('/tasks/delete/:id', tasks.delete)
router.delete('/users/delete/:id', users.delete)

module.exports = router;