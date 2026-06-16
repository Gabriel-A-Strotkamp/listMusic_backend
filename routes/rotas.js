const { Router } = require('express');

const { rotasCantor } = require('./rotasCantor');
const { rotasGravadora} = require('./rotasGravadora');
const { rotasMusica} = require('./rotasMusica');
const { rotasGenero} = require('./rotassGenero');
const { login } = require('../controllers/segurancaController');

const rotas = new Router();

rotas.use(rotasCantor);
rotas.use(rotasGravadora);
rotas.use(rotasMusica);
rotas.use(rotasGenero);


// rota para fazer o login e pegar o JWT
rotas.route("/login")
   .post(login)   

   
module.exports = rotas;