var express = require('express');
var app = express();
var router = express.Router();
var sm = require('sitemap');
var sitemap = sm.createSitemap ({
      hostname: 'http://www.designbydev.com',
      cacheTime: 600000,        // 600 sec - cache purge period
      urls: [
        { url: '/home',  changefreq: 'daily', priority: 0.3 },
        { url: '/info',  changefreq: 'daily', priority: 0.3 },
        { url: '/work',   changefreq: 'daily', priority: 0.3 },
        { url: '/services'} //,   img: "http://urlTest.com" }
      ]
    });

router.get('/robots.txt', function (req, res) {
    res.type('text/plain');
    res.send("User-agent: *\nAllow: /");
});

router.get('/sitemap.xml', function(req, res) {
  sitemap.toXML( function (err, xml) {
          if (err) {
            return res.status(500).end();
          }
          res.header('Content-Type', 'application/xml');
          res.send( xml );
      });
    });

router.get('/', function(req, res, user){
    res.render('index', {layout: false});
});

router.get('/home', function(req, res, user){
    res.render('home');
});

router.get('/services', function(req, res, user){
    res.render('services');
});

router.get('/sitemap', function(req, res, user){
  var fs = require('fs');

  try {
      var data = fs.readFileSync('sitemap.txt', 'utf8');
      res.send(data);
  } catch(e) {
      console.log('Error:', e.stack);
  }
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
