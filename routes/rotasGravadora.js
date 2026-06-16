const { Router } = require('express');

const { addGravadora, updateGravadora, deleteGravadora, getGravadoraPorId, getGravadoras } = require('../controllers/gravadoraController');

const { verificaJWT } = require('../controllers/segurancaController')

const rotasGravadora = new Router();

rotasGravadora.route('/gravadora')
   .get(verificaJWT, getGravadoras)
   .post(verificaJWT, addGravadora)
   .put(verificaJWT, updateGravadora)

rotasGravadora.route('/gravadora/:id')
   .get(verificaJWT, getGravadoraPorId)
   .delete(verificaJWT, deleteGravadora)

module.exports = { rotasGravadora };