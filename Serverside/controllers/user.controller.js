const User = require('../models/user.model');
const { generateAuthToken } = require('../middleware/token');

// CREATE
exports.create = (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    avatar: req.body.avatar
  });

  user.save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(501).send({
        message: err.message || 'Failed to create user'
      });
    });
};

// FIND ALL USERS
exports.findAll = (req, res) => {
  User.find()
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(501).send({
        message: err.message || 'Failed to retrieve users'
      });
    });
};

// FIND A SINGLE USER BY ID
exports.findById = (req, res) => {
  const userId = req.params.id;

  User.findById(userId)
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: 'User not found' });
      }
      res.send(user);
    })
    .catch(err => {
      res.status(501).send({
        message: err.message || 'Failed to retrieve user'
      });
    });
};

// User Login
exports.login = (req, res) => {
  const { name, password } = req.body;
  console.log('Login request:', { name, password }); // Log the received fields
  User.findOne({ name })
    .then(user => {
      if (!user) {
        console.log('User not found:', name); // Log the name that was searched
        return res.status(404).send({ message: 'User not found' });
      }
      // Compare passwords
      if (user.password !== password) {
        console.log('Invalid password for user:', name); // Log the user's name
        return res.status(401).send({ message: 'Invalid password' });
      }
      const token = generateAuthToken(user);
      console.log('Login successful:', name); // Log the user's name
      res.status(200).send({ message: 'Login successful', token });
    })
    .catch(err => {
      console.log('Failed to retrieve user:', err); // Log the error details
      res.status(500).send({ message: err.message || 'Failed to retrieve user' });
    });
};


// UPDATE
exports.update = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: 'User not found' });
      }
      res.send(user);
    })
    .catch(err => {
      res.status(501).send({
        message: err.message || 'Failed to update user'
      });
    });
};

// DELETE
exports.delete = (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: 'User not found' });
      }
      res.send({ message: 'User deleted successfully' });
    })
    .catch(err => {
      res.status(501).send({
        message: err.message || 'Failed to delete user'
      });
    });
};
