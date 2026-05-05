const { Router } = require('express');

const { addCantor, updateCantor, deleteCantor, getCantorPorId, getCantores } = require('../controllers/cantorController');

const rotasCantor = new Router();

rotasCantor.route('/cantor')
   .get(getCantores)
   .post(addCantor)
   .put(updateCantor)

rotasCantor.route('/cantor/:id')
   .get(getCantorPorId)
   .delete(deleteCantor)

module.exports = { rotasCantor };