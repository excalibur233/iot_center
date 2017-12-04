const router = require('express').Router();
const testController = require('../controllers/test.controller');

router.get('/index', testController.index);

const prefix = '/test';
module.exports = function (app) {
  app.use(prefix, router);
};
