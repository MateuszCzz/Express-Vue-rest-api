const Castle = require('../models/castle.model');

// CREATE
exports.create = (req, res) => {
  const castle = new Castle({
    name: req.body.name,
    location: req.body.location,
    description: req.body.description,
    image: req.body.image,
    yearBuilt: req.body.yearBuilt,
    architecturalStyle: req.body.architecturalStyle,
    openingHours: req.body.openingHours,
    admissionFee: req.body.admissionFee
  });

  castle.save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(501).send({
        message: err.message || 'Failed to create castle'
      });
    });
};

// FIND ALL
exports.findAll = (req, res) => {
  Castle.find()
    .then(castles => {
      res.send(castles);
    })
    .catch(err => {
      res.status(501).send({
        message: err.message || 'Failed to retrieve castles'
      });
    });
};

// FIND BY ID
exports.findById = (req, res) => {
  Castle.findById(req.params.id)
    .then(castle => {
      if (!castle) {
        return res.status(404).send({ message: 'Castle not found' });
      }
      res.send(castle);
    })
    .catch(err => {
      res.status(501).send({
        message: err.message || 'Failed to retrieve castle'
      });
    });
};

// UPDATE
exports.update = (req, res) => {
  Castle.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(castle => {
      if (!castle) {
        return res.status(404).send({ message: 'Castle not found' });
      }
      res.send(castle);
    })
    .catch(err => {
      res.status(501).send({
        message: err.message || 'Failed to update castle'
      });
    });
};

// DELETE
exports.delete = (req, res) => {
  Castle.findByIdAndRemove(req.params.id)
    .then(castle => {
      if (!castle) {
        return res.status(404).send({ message: 'Castle not found' });
      }
      res.send({ message: 'Castle deleted successfully' });
    })
    .catch(err => {
      res.status(501).send({
        message: err.message || 'Failed to delete castle'
      });
    });
};
