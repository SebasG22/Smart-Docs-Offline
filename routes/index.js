var express = require('express');
var path = require("path");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.get('/service-worker.js',function(req,res,next){
    res.sendFile(path.resolve(__dirname, '..') + "/service-worker.js");
});

router.get('/manifest.json',function(req,res,next){
    res.sendFile(path.resolve(__dirname, '..') + "/manifest.json");
})

router.get('/img/HuaweiLogo.png',function(req,res,next){
    res.sendFile(path.resolve(__dirname, '..') + "/dist/img/huaweiLogo.png");
})
module.exports = router;
