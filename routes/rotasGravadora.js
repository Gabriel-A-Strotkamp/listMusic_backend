const { Router } = require('express');

const { addGravadora, updateGravadora, deleteGravadora, getGravadoraPorId, getGravadoras } = require('../controllers/gravadoraController');

const rotasGravadora = new Router();

rotasGravadora.route('/gravadora')
   .get(getGravadoras)
   .post(addGravadora)
   .put(updateGravadora)

rotasGravadora.route('/gravadora/:id')
   .get(getGravadoraPorId)
   .delete(deleteGravadora)

module.exports = { rotasGravadora };