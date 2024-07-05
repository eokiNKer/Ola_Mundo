var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('esportes');
});

router.get('/Volêi', function(req, res, next) {
    res.send('Volêi é o melhor esporte do mundo.');
  });
  
  router.get('/Volêi de areia', function(req, res, next) {
    res.send('Volêi de areia é o segundo melhor.');
  });
  
  router.get('/Basquete', function(req, res, next) {
    res.send('Basquete é o terceiro melhor.');
  });
  
  router.get('/Futebol', function(req, res, next) {
    res.send('Futebol é o quarto melhor.');
  });

module.exports = router;
