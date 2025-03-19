var conn = require('./../inc/db');
var menus = require('./../inc/menus');
var reservations = require('./../inc/reservations')
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

router.post('/contacts', function(req, res, next) {

  if(!req.body.name){
    contacts.render(req, res, 'Digite o nome');
  }else if(!req.body.email){
    contacts.render(req, res, 'Digite o email');
  }
  else if(!req.body.message){
    contacts.render(req, res, 'Digite a mensagem');
  }
  else{

    contacts.save(req.body).then(results => {
      req.body = {};
      io.emit('dashboard update');
      contacts.render(req, res, null, "Contato realizado com sucesso!");

    }).catch(err => {
      contacts.render(req, res, err.message);
    });
  }
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

router.get('/reservations', function(req, res, next) {
  reservations.render(req, res);
});

router.post('/reservations', function(req, res, next) {

  if(!req.body.name){
    reservations.render(req, res, "Digite o nome");
  }else if(!req.body.email){
    reservations.render(req, res, "Digite o email");
  }else if(!req.body.people){
    reservations.render(req, res, "Selecione a quantidade numero de pessoas");
  }else if(!req.body.date){
    reservations.render(req, res, "Selecione a data");
  }else if(!req.body.time){
    reservations.render(req, res, "Selecione a hora");
  }else{
     reservations.save(req.body).then(results => {
      req.body = {};
      io.emit('dashboard update');

      reservations.render(req, res, null, "Reserva realizada com sucesso!");

    }).catch(err => {
      reservations.render(req, res, err.message);
    });
  }

});


router.get('/services', function(req, res, next){
  res.render('services', {
    title: 'Our Services',
     background: 'images/img_bg_1.jpg',
    h1: 'q prazer obg'
  });
});

module.exports = router;
