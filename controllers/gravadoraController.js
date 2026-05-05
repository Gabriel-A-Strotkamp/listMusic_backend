const { addGravadoraDB, updateGravadoraDB, deleteGravadoraDB, getGravadoraPorIdDB, getGravadorasDB } = require('../usecases/gravadoraUseCases')

const addGravadora = async (request, response) => {
    await addGravadoraDB(request.body)
        .then(data => response.status(200).json({
            status: "success", message: "Gravadora criada",
            objeto: data
        }))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));
}

const updateGravadora = async (request, response) => {
    await updateGravadoraDB(request.body)
        .then(data => response.status(200).json({
            status: "success", message: "Gravadora alterada",
            objeto: data
        }))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));
}

const deleteGravadora = async (request, response) => {
    await deleteGravadoraDB(parseInt(request.params.id))
        .then(data => response.status(200).json({
            status: "success", message: data
        }))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));        
}

const getGravadoraPorId = async (request, response) => {
    await getGravadoraPorIdDB(parseInt(request.params.id))
        .then(data => response.status(200).json(data))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));           
}
const getGravadoras = async (request, response) => {
    await getGravadorasDB()
        .then(data => response.status(200).json(data))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));
}

module.exports = {
    addGravadora, updateGravadora, deleteGravadora, getGravadoraPorId, getGravadoras
}