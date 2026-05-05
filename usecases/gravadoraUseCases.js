const { pool } = require('../config');
const Cantor = require ('../entities/Gravadora')

const addGravadoraDB = async (body) => {
    try {   
        const { nome, pais } = body; 
        const results = await pool.query(`
            INSERT INTO gravadora (nome, pais) 
            VALUES ($1, $2)
            returning id_gravadora, nome, pais`,
        [nome, pais]);

        return results.rows[0]; 
    } catch (err) {
        throw "Erro ao inserir a gravadora: " + err;
    }    
}

const updateGravadoraDB = async (body) => {
    try {   
        const { id_gravadora, nome, pais } = body; 
        const results = await pool.query(`
            UPDATE gravadora 
            SET nome = $2, pais = $3
            WHERE id_gravadora = $1
            returning *`,
        [id_gravadora, nome, pais]);

        if (results.rowCount == 0){
            throw `Nenhuma gravadora encontrada com o código ${id_gravadora}`;
        }

        return results.rows[0]; 
    } catch (err) {
        throw "Erro ao alterar a gravadora: " + err;
    }      
}

const deleteGravadoraDB = async (id_gravadora) => {
    try {           
        const results = await pool.query(
            `DELETE FROM gravadora WHERE id_gravadora = $1`,
        [id_gravadora]);

        if (results.rowCount == 0){
            throw `Nenhuma gravadora encontrada com o código ${id_gravadora}`;
        } else {
            return "Gravadora removida com sucesso";
        }       
    } catch (err) {
        throw "Erro ao remover a gravadora: " + err;
    }     
}

const getGravadoraPorIdDB = async (id_gravadora) => {
    try {           
        const results = await pool.query(
            `SELECT * FROM gravadora WHERE id_gravadora = $1`,
        [id_gravadora]);

        if (results.rowCount == 0){
            throw "Nenhuma gravadora encontrada com o código: " + id_gravadora;
        } else {
            return results.rows[0]; 
        }       
    } catch (err) {
        throw "Erro ao recuperar a gravadora: " + err;
    }     
}

const getGravadorasDB = async () => {
    try {
        const results = await pool.query(`SELECT * FROM gravadora`);
        return results.rows;
    } catch (err) {
        throw "Erro ao recuperar gravadoras: " + err;
    }
}
module.exports = {
    addGravadoraDB, updateGravadoraDB, deleteGravadoraDB, getGravadoraPorIdDB,getGravadorasDB
}