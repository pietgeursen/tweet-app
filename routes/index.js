var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tweet App: Avalanche' });
});

router.get('/tweets/all', function(req, res, next) {
  res.render('tweets', { allTweets: 'Tweets Here' });
});

module.exports = router;
