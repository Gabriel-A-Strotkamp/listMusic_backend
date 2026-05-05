const { addGeneroDB, updateGeneroDB, deleteGeneroDB, getGeneroPorIdDB, getGenerosDB } = require('../usecases/generoUseCases')

const addGenero = async (request, response) => {
    await addGeneroDB(request.body)
        .then(data => response.status(200).json({
            status: "success", message: "Gênero criado",
            objeto: data
        }))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));
}

const updateGenero = async (request, response) => {
    await updateGeneroDB(request.body)
        .then(data => response.status(200).json({
            status: "success", message: "Gênero alterado",
            objeto: data
        }))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));
}

const deleteGenero = async (request, response) => {
    await deleteGeneroDB(parseInt(request.params.id))
        .then(data => response.status(200).json({
            status: "success", message: data
        }))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));        
}

const getGeneroPorId = async (request, response) => {
    await getGeneroPorIdDB(parseInt(request.params.id))
        .then(data => response.status(200).json(data))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));           
}
const getGeneros = async (request, response) => {
    await getGenerosDB()
        .then(data => response.status(200).json(data))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));
}

module.exports = {
    addGenero, updateGenero, deleteGenero, getGeneroPorId, getGeneros
}