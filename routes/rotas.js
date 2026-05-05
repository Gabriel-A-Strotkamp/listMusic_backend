const { Router } = require('express');

const { rotasCantor } = require('./rotasCantor');
const { rotasGravadora} = require('./rotasGravadora');
const { rotasMusica} = require('./rotasMusica');
const { rotasGenero} = require('./rotassGenero');

const rotas = new Router();

rotas.use(rotasCantor);
rotas.use(rotasGravadora);
rotas.use(rotasMusica);
rotas.use(rotasGenero);


module.exports = rotas;