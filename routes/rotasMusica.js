const { Router } = require('express');

const { addMusica, updateMusica, deleteMusica, getMusicaPorId, getMusicas } = require('../controllers/musicaController');

const rotasMusica = new Router();

rotasMusica.route('/musica')
   .get(getMusicas)
   .post(addMusica)
   .put(updateMusica)

rotasMusica.route('/musica/:id')
   .get(getMusicaPorId)
   .delete(deleteMusica)

module.exports = { rotasMusica };