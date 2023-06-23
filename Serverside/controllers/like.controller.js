const Like = require('../models/like.model');

// CREATE
exports.create = (req, res) => {
  const like = new Like({
    castle: req.body.castle,
    user: req.body.user
  });

  like.save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(502).send({
        message: err.message || 'Failed to create like'
      });
    });
};

// FIND ALL LIKES FOR A USER
exports.findAllLikesForUser = (req, res) => {
  const userId = req.params.userId;

  Like.find({ user: userId })
    .populate('user', 'username') // Optional: populate user data
    .populate('castle', 'name') // Optional: populate castle data
    .then(likes => {
      res.send(likes);
    })
    .catch(err => {
      res.status(502).send({
        message: err.message || 'Failed to retrieve likes'
      });
    });
};

// FIND ALL LIKES FOR A CASTLE
exports.findAllLikesForCastle = (req, res) => {
  const castleId = req.params.castleId;

  Like.find({ castle: castleId })
    .populate('user', 'username') // Optional: populate user data
    .populate('castle', 'name') // Optional: populate castle data
    .then(likes => {
      res.send(likes);
    })
    .catch(err => {
      res.status(502).send({
        message: err.message || 'Failed to retrieve likes'
      });
    });
};

// UPDATE
exports.update = (req, res) => {
  Like.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(like => {
      if (!like) {
        return res.status(404).send({ message: 'Like not found' });
      }
      res.send(like);
    })
    .catch(err => {
      res.status(502).send({
        message: err.message || 'Failed to update like'
      });
    });
};

// DELETE
exports.delete = (req, res) => {
  const { castle, user } = req.body;

  Like.findOneAndDelete({ castle: castle, user: user })
    .then(like => {
      if (!like) {
        return res.status(404).send({ message: 'Like not found' });
      }
      res.send({ message: 'Like deleted successfully' });
    })
    .catch(err => {
      res.status(502).send({
        message: err.message || 'Failed to delete like'
      });
    });
};

