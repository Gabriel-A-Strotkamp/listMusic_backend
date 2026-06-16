const { Router } = require('express');

const { addMusica, updateMusica, deleteMusica, getMusicaPorId, getMusicas } = require('../controllers/musicaController');

const { verificaJWT } = require('../controllers/segurancaController')

const rotasMusica = new Router();

rotasMusica.route('/musica')
   .get(verificaJWT, getMusicas)
   .post(verificaJWT, addMusica)
   .put(verificaJWT, updateMusica)

rotasMusica.route('/musica/:id')
   .get(verificaJWT, getMusicaPorId)
   .delete(verificaJWT, deleteMusica)

module.exports = { rotasMusica };