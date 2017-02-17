var express = require('express');
var app = express();
var router = express.Router();

//GET index
router.get('/', function(req, res, user){
    res.render('index', {layout: false});
});

router.get('/home', function(req, res, user){
    res.render('home');
});

router.get('/services', function(req, res, user){
    res.render('services');
});


router.get('/info', function(req, res, user){
    res.render('info');
});

router.get('/work', function(req, res, user){
    res.render('work');
});

router.get('/ryan/home', function(req, res, user){
    res.render('ryan', {layout: false});
    currentUser();
});

router.get('/ryan/projects', function(req, res, user){
    res.render('projects', {layout: false});
    currentUser();
});

router.get('/ryan/skills', function(req, res, user){
    res.render('skills', {layout: false});
    currentUser();
});

router.get('/ryan/network', function(req, res, user){
    res.render('network', {layout: false});
    currentUser();
});

module.exports = router;
