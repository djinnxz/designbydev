var express = require('express');
var app = express();
var router = express.Router();

//GET index
router.get('/', function(req, res, user){
    res.render('index', {layout: false});
});

router.get('/home', function(req, res, user){
    res.render('home', {layout: false});
});

router.get('/services', function(req, res, user){
    res.render('services', {layout: false});
});

router.get('/about', function(req, res, user){
    res.render('about', {layout: false});
});

router.get('/contact', function(req, res, user){
    res.render('contact', {layout: false});
});

router.get('/work', function(req, res, user){
    res.render('work', {layout: false});
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
