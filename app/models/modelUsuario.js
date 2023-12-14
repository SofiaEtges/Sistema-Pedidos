const usuario = require('../rotas/usuario');

function Usuario (conexao){
    this._conexao = conexao;
    this._crypto = require('crypto');
}
Usuario.prototype.cadastrar = function(dados, callback){
    dados.senha = this._crypto.createHash('md5').update(dados.senha).digest('hex');
    this._conexao.query(`insert into usuario set nome = '${dados.nome}', senha = '${dados.senha}', email = '${dados.email}', id_tipo_usuario = 2`, callback)
}
Usuario.prototype.getUsuarioEmail =function (email, callback){
    this._conexao.query(`select * from usuario where email = '${email}'`, callback)
}
Usuario.prototype.getUsuario = function(dados, callback){
    const senha = this._crypto.createHash('md5').update(dados.senha).digest('hex')
    this._conexao.query(`select * from usuario where email = '${dados.email}' and senha = '${senha}'`, callback)
}
Usuario.prototype.getUsuarioById =function (id, callback){
    this._conexao.query(`select * from usuario where id = '${id}'`, callback)
}
Usuario.prototype.editar = function(dados, idUsuario, callback){
    dados.senha = this._crypto.createHash('md5').update(dados.senha).digest('hex')
    this._conexao.query(`update usuario set nome = '${dados.nome}', email = '${dados.email}', senha = '${dados.senha}', id_tipo_usuario = '${dados.id_tipo_usuario}' where id = '${idUsuario}'`, callback)
}
Usuario.prototype.listar_usuario = function( callback){
    this._conexao.query(`select * from usuario `, callback)
}
Usuario.prototype.excluir = function(id, callback){
    this._conexao.query(`delete from usuario where id = ${id}`, callback)
}
Usuario.prototype.salvar = function(dados, idUsuario, callback){
    console.log(dados)
    console.log(idUsuario)
    dados.senha = this._crypto.createHash('md5').update(dados.senha).digest('hex')
    this._conexao.query(`update usuario set nome = '${dados.nome}',  email = '${dados.email}', senha = '${dados.senha}', id_tipo_usuario = '${dados.id_tipo_usuario}' where id = '${idUsuario}'`, callback)
}
Usuario.prototype.listar_produtos = function( callback){
    this._conexao.query(`select * from produto `, callback)
}
module.exports = function(){

    return Usuario;
}