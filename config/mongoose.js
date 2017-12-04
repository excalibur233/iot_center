const mongoose = require('mongoose');
const config = require('./config');

module.exports = function () {
  const mongodb = mongoose.connect(config.mongodbConfig.url,
                                { useMongoClient: true });

  // register models
  require('../app/models/bear.model');

  return mongodb;
};

