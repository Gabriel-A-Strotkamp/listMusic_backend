const { Router } = require('express');

const { addGenero, updateGenero, deleteGenero, getGeneroPorId, getGeneros } = require('../controllers/generoController');

const { verificaJWT } = require('../controllers/segurancaController')

const rotasGenero = new Router();

rotasGenero.route('/genero')
   .get(verificaJWT, getGeneros)
   .post(verificaJWT, addGenero)
   .put(verificaJWT, updateGenero)

rotasGenero.route('/genero/:id')
   .get(verificaJWT, getGeneroPorId)
   .delete(verificaJWT, deleteGenero)

module.exports = { rotasGenero };