var express = require('express');
var router = express.Router();
const indexController = require('../controller/indexController');
const data = require('../util/database_config');

/* GET request */
router.get('/', indexController.homepage);
router.get('/sign-in', indexController.SigninPage);
router.get('/sign-up', indexController.SignUpPage);
router.get('/sign-out', indexController.SignOutPage);

/* POST request */
router.post('/sign-in',indexController.SigninPost);
router.post('/sign-up',indexController.SignUpPost);

module.exports = router;
