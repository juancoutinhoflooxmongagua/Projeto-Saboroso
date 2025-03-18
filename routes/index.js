var conn = require('./../inc/db');
var menus = require('./../inc/menus');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  menus.getMenus().then(results => {
    res.render('index', { 
      title: 'Sensational Restaurant!', 
      menus: results,
      isHome: true,
      background: 'images/img_bg_1.jpg' 
    });
  });

});


router.get('/contacts', function(req, res, next){
  res.render('contact', { title: "Contato" }); 
});

router.get('/menus', function(req, res, next) {

  menus.getMenus().then(results => {
    res.render('menus', { 
      title: 'Our Menus', 
      background: 'images/img_bg_1.jpg',
      h1: 'saboreie nosso main menu',
      menus: results
    });
  });
});

router.get('/reservations', function(req, res, next){
  res.render('reservation', { title: "Reservas" }); 
});

router.get('/services', function(req, res, next){
  res.render('services', {
    title: 'Our Services',
     background: 'images/img_bg_1.jpg',
    h1: 'q prazer obg'
  });
});

module.exports = router;
