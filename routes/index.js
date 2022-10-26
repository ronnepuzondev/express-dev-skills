var express = require('express');
var router = express.Router();
var skillsCtrl = require("../controllers/skills");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Dev Skills' });
});

module.exports = router;
