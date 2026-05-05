const { addMusicaDB, updateMusicaDB, deleteMusicaDB, getMusicaPorIdDB, getMusicasDB } = require('../usecases/musicaUseCases')

const addMusica = async (request, response) => {
    await addMusicaDB(request.body)
        .then(data => response.status(200).json({
            status: "success", message: "Música criada",
            objeto: data
        }))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));
}

const updateMusica = async (request, response) => {
    await updateMusicaDB(request.body)
        .then(data => response.status(200).json({
            status: "success", message: "Música alterada",
            objeto: data
        }))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));
}

const deleteMusica = async (request, response) => {
    await deleteMusicaDB(parseInt(request.params.id))
        .then(data => response.status(200).json({
            status: "success", message: data
        }))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));        
}

const getMusicaPorId = async (request, response) => {
    await getMusicaPorIdDB(parseInt(request.params.id))
        .then(data => response.status(200).json(data))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));           
}
const getMusicas = async (request, response) => {
    await getMusicasDB()
        .then(data => response.status(200).json(data))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));
}
module.exports = {
    addMusica, updateMusica, deleteMusica, getMusicaPorId,getMusicas
}