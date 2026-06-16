const { Router } = require('express');

const { addCantor, updateCantor, deleteCantor, getCantorPorId, getCantores } = require('../controllers/cantorController');

const { verificaJWT } = require('../controllers/segurancaController')

const rotasCantor = new Router();

rotasCantor.route('/cantor')
   .get(verificaJWT, getCantores)
   .post(verificaJWT, addCantor)
   .put(verificaJWT, updateCantor)

rotasCantor.route('/cantor/:id')
   .get(verificaJWT, getCantorPorId)
   .delete(verificaJWT, deleteCantor)

module.exports = { rotasCantor };