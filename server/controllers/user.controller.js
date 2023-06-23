const db = require("../models");
const User = db.users;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // if (!req.body.title) {
    //     res.status(400).send({ message: "Content can not be empty!" });
    //     return;
    // }
    const user = new User({
        username: "Damian",
        email: "example@mail.com",
        password: "123"
    })

    user.save(user)
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message | "some errors"
            })
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    User.find(condition)
        .populate('tasks')
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    // todo uzywa tego dlugiego id, zmienic w razie mozliwosci
    User.findById(id)
        .populate('tasks')
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Tutorial with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Tutorial with id=" + id });
        });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    // 647af9d1f1be9ce14692db95
    const { userId, taskId } = req.body;

    User.findByIdAndUpdate(
        userId,
        { $push: { tasks: taskId } },
        { new: true }
    )
        .then((updatedUser) => {
            res.send(updatedUser);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while adding task to the user.",
            });
        });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    User.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
                });
            } else {
                res.send({
                    message: "Tutorial was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tutorial with id=" + id
            });
        });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {

};