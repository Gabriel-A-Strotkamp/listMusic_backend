const { addCantorDB, updateCantorDB, deleteCantorDB, getCantorPorIdDB, getCantoresDB } = require('../usecases/cantorUseCases')

const addCantor = async (request, response) => {
    await addCantorDB(request.body)
        .then(data => response.status(200).json({
            status: "success", message: "Cantor criado",
            objeto: data
        }))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));
}

const updateCantor = async (request, response) => {
    await updateCantorDB(request.body)
        .then(data => response.status(200).json({
            status: "success", message: "Cantor alterado",
            objeto: data
        }))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));
}

const deleteCantor = async (request, response) => {
    await deleteCantorDB(parseInt(request.params.id))
        .then(data => response.status(200).json({
            status: "success", message: data
        }))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));        
}

const getCantorPorId = async (request, response) => {
    await getCantorPorIdDB(parseInt(request.params.id))
        .then(data => response.status(200).json(data))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));           
}

const getCantores = async (request, response) => {
    await getCantoresDB()
        .then(data => response.status(200).json(data))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));
}

module.exports = {
    addCantor, updateCantor, deleteCantor, getCantorPorId, getCantores
}