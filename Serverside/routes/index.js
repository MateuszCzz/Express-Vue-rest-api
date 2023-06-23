const express = require('express');
const router = express.Router();
const castleController = require('../controllers/castle.controller');
const userController = require('../controllers/user.controller');
const likeController = require('../controllers/like.controller');

// Castle routes
router.post('/castles', castleController.create);
router.get('/castles/:id', castleController.findById);
router.get('/castles', castleController.findAll);
router.patch('/castles/:id', castleController.update);
router.delete('/castles/:id', castleController.delete);

// User routes
router.post('/users', userController.create);
router.get('/users/:id', userController.findById);
router.get('/users', userController.findAll);
router.patch('/users/:id', userController.update);
router.delete('/users/:id', userController.delete);
router.post('/login', userController.login);

// Like routes
router.post('/likes', likeController.create);
router.get('/likes/user', likeController.findAllLikesForUser);
router.get('/likes/castle/:castleId', likeController.findAllLikesForCastle);
router.patch('/likes/:id', likeController.update);
router.delete('/likes', likeController.delete);

module.exports = router;
