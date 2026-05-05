const { pool } = require('../config');
const Cantor = require ('../entities/Genero')

const addGeneroDB = async (body) => {
    try {   
        const { descricao } = body; 
        const results = await pool.query(`
            INSERT INTO genero (descricao) 
            VALUES ($1)
            returning id_genero, descricao`,
        [descricao]);

        return results.rows[0]; 
    } catch (err) {
        throw "Erro ao inserir o gênero: " + err;
    }    
}

const updateGeneroDB = async (body) => {
    try {   
        const { id_genero, descricao } = body; 
        const results = await pool.query(`
            UPDATE genero 
            SET descricao = $2 
            WHERE id_genero = $1
            returning *`,
        [id_genero, descricao]);

        if (results.rowCount == 0){
            throw `Nenhum gênero encontrado com o código ${id_genero}`;
        }

        return results.rows[0]; 
    } catch (err) {
        throw "Erro ao alterar o gênero: " + err;
    }      
}

const deleteGeneroDB = async (id_genero) => {
    try {           
        const results = await pool.query(
            `DELETE FROM genero WHERE id_genero = $1`,
        [id_genero]);

        if (results.rowCount == 0){
            throw `Nenhum gênero encontrado com o código ${id_genero}`;
        } else {
            return "Gênero removido com sucesso";
        }       
    } catch (err) {
        throw "Erro ao remover o gênero: " + err;
    }     
}

const getGeneroPorIdDB = async (id_genero) => {
    try {           
        const results = await pool.query(
            `SELECT * FROM genero WHERE id_genero = $1`,
        [id_genero]);

        if (results.rowCount == 0){
            throw "Nenhum gênero encontrado com o código: " + id_genero;
        } else {
            return results.rows[0]; 
        }       
    } catch (err) {
        throw "Erro ao recuperar o gênero: " + err;
    }     
}
const getGenerosDB = async () => {
    try {
        const results = await pool.query(`SELECT * FROM genero`);
        return results.rows;
    } catch (err) {
        throw "Erro ao recuperar gêneros: " + err;
    }
}

module.exports = {
    addGeneroDB, updateGeneroDB, deleteGeneroDB, getGeneroPorIdDB, getGenerosDB
}