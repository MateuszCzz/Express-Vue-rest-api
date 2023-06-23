const dbConfig = require("../configuration/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.users = require("./user.model")(mongoose);
db.castles = require("./castle.model")(mongoose);
db.likes = require("./like.model")(mongoose);
module.exports = db;