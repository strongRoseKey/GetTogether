var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/activity', function(req, res, next) {
  res.render('activityList', { title: 'Activity' });
});

router.get('/activity/padding', function(req, res, next) {
  res.render('activityPadding', { title: 'Padding Activity' });
});

module.exports = router;
