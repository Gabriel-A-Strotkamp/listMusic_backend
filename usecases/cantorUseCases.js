const pool = require('../config');
const Cantor = require ('../entities/Cantor')

const addCantorDB = async (body) => {
    try {   
        const { nome, data_nascimento, nacionalidade } = body; 
        const results = await pool.query(`
            INSERT INTO cantor (nome, data_nascimento, nacionalidade) 
            VALUES ($1, $2, $3)
            returning id_cantor, nome, data_nascimento, nacionalidade`,
        [nome, data_nascimento, nacionalidade]);

        const cantor = results.rows[0];
        return cantor; 
    } catch (err) {
        throw "Erro ao inserir o cantor: " + err;
    }    
}

const updateCantorDB = async (body) => {
    try {   
        const { id_cantor, nome, data_nascimento, nacionalidade } = body; 
        const results = await pool.query(`
            UPDATE cantor 
            SET nome = $2, data_nascimento = $3, nacionalidade = $4
            WHERE id_cantor = $1
            returning *`,
        [id_cantor, nome, data_nascimento, nacionalidade]);

        if (results.rowCount == 0){
            throw `Nenhum cantor encontrado com o código ${id_cantor}`;
        }

        return results.rows[0]; 
    } catch (err) {
        throw "Erro ao alterar o cantor: " + err;
    }      
}

const deleteCantorDB = async (id_cantor) => {
    try {           
        const results = await pool.query(
            `DELETE FROM cantor WHERE id_cantor = $1`,
        [id_cantor]);

        if (results.rowCount == 0){
            throw `Nenhum cantor encontrado com o código ${id_cantor}`;
        } else {
            return "Cantor removido com sucesso";
        }       
    } catch (err) {
        throw "Erro ao remover o cantor: " + err;
    }     
}

const getCantorPorIdDB = async (id_cantor) => {
    try {           
        const results = await pool.query(
            `SELECT * FROM cantor WHERE id_cantor = $1`,
        [id_cantor]);

        if (results.rowCount == 0){
            throw "Nenhum cantor encontrado com o código: " + id_cantor;
        } else {
            return results.rows[0]; 
        }       
    } catch (err) {
        throw "Erro ao recuperar o cantor: " + err;
    }     
}

const getCantoresDB = async () => {
    try {
        const results = await pool.query(`SELECT * FROM cantor`);
        return results.rows;
    } catch (err) {
        throw "Erro ao recuperar cantores: " + err;
    }
}

module.exports = {
    addCantorDB, updateCantorDB, deleteCantorDB, getCantorPorIdDB, getCantoresDB
}