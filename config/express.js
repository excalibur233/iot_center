const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const logger = require('morgan');
const path = require('path');

module.exports = function () {
  "use strict";
  const app = express();

  // use logger when development
  if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'));
  }
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  // register local routes here

  // catch the 404 error.
  app.use((req, res) => {
    res.status(404);
    res.json({error_code: '404'});
  });

  // catch the 500 error,
  app.use((err, req, res, next) => {
    res.status(500);
    res.json({error_code: '500'});
  });

  return app;
};
