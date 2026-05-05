const addMusicaDB = async (body) => {
    try {   
        const { nome, ano, album, duracao, id_cantor, id_genero, id_gravadora } = body; 
        const results = await pool.query(`
            INSERT INTO musica (nome, ano, album, duracao, id_cantor, id_genero, id_gravadora) 
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            returning *`,
        [nome, ano, album, duracao, id_cantor, id_genero, id_gravadora]);

        return results.rows[0]; 
    } catch (err) {
        throw "Erro ao inserir a música: " + err;
    }    
}

const updateMusicaDB = async (body) => {
    try {   
        const { id_musica, nome, ano, album, duracao, id_cantor, id_genero, id_gravadora } = body; 
        const results = await pool.query(`
            UPDATE musica 
            SET nome = $2, ano = $3, album = $4, duracao = $5,
                id_cantor = $6, id_genero = $7, id_gravadora = $8
            WHERE id_musica = $1
            returning *`,
        [id_musica, nome, ano, album, duracao, id_cantor, id_genero, id_gravadora]);

        if (results.rowCount == 0){
            throw `Nenhuma música encontrada com o código ${id_musica}`;
        }

        return results.rows[0]; 
    } catch (err) {
        throw "Erro ao alterar a música: " + err;
    }      
}

const deleteMusicaDB = async (id_musica) => {
    try {           
        const results = await pool.query(
            `DELETE FROM musica WHERE id_musica = $1`,
        [id_musica]);

        if (results.rowCount == 0){
            throw `Nenhuma música encontrada com o código ${id_musica}`;
        } else {
            return "Música removida com sucesso";
        }       
    } catch (err) {
        throw "Erro ao remover a música: " + err;
    }     
}

const getMusicaPorIdDB = async (id_musica) => {
    try {           
        const results = await pool.query(
            `SELECT * FROM musica WHERE id_musica = $1`,
        [id_musica]);

        if (results.rowCount == 0){
            throw "Nenhuma música encontrada com o código: " + id_musica;
        } else {
            return results.rows[0]; 
        }       
    } catch (err) {
        throw "Erro ao recuperar a música: " + err;
    }     
}

module.exports = {
    addMusicaDB, updateMusicaDB, deleteMusicaDB, getMusicaPorIdDB
}