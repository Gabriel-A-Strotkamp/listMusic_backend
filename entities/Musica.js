class Musica{
    constructor(id_musica, nome,ano, album, duracao,
        id_cantor, id_genero, id_gravadora){
            this.id_musica=id_musica;
            this.nome=nome;
            this.ano=ano;
            this.album=album;
            this.duracao=duracao;
            this.id_cantor=id_cantor;
            this.id_genero=id_genero;
            this.id_gravadora=id_gravadora;
}
}

module.exports = Musica;