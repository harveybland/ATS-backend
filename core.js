// set up require
const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
const Schema = mongoose.Schema;
const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));

var mongoDB =
  'mongodb://admin:Password123!@cluster0-shard-00-00.j8u0c.mongodb.net:27017,cluster0-shard-00-01.j8u0c.mongodb.net:27017,cluster0-shard-00-02.j8u0c.mongodb.net:27017/HarveyATS?replicaSet=atlas-o7v9ke-shard-0&ssl=true&authSource=admin';
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// export all
module.exports.app = app;
module.exports.mongoose = mongoose;
module.exports.Schema = Schema;
