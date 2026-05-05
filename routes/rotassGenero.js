const { Router } = require('express');

const { addGenero, updateGenero, deleteGenero, getGeneroPorId, getGeneros } = require('../controllers/generoController');

const rotasGenero = new Router();

rotasGenero.route('/genero')
   .get(getGeneros)
   .post(addGenero)
   .put(updateGenero)

rotasGenero.route('/genero/:id')
   .get(getGeneroPorId)
   .delete(deleteGenero)

module.exports = { rotasGenero };