const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = new Schema({
  castle: {
    type: Schema.Types.ObjectId,
    ref: 'Castle',
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Like', likeSchema);
