const admin = require('../rotas/admin');

function Admin (conexao){
    this._conexao = conexao;
    this._crypto = require('crypto');
}
Admin.prototype.cadastrarProduto = function(dados, callback){
    this._conexao.query(`insert into produto set descricao = '${dados.descricao}', preco = '${dados.preco}'`, callback)
}
Admin.prototype.listar_produto = function( callback){
    this._conexao.query(`select * from produto `, callback)
}
Admin.prototype.getProduto = function(dados, callback){
    this._conexao.query(`select * from produto where descricao = '${dados.descricao}' and preco = ${dados.preco}`, callback)
}
Admin.prototype.getProdutoById =function (idProduto, callback){
    this._conexao.query(`select * from produto where id = '${idProduto}'`, callback)
}
Admin.prototype.salvarProduto = function(dados, idProduto, callback){
    this._conexao.query(`update produto set descricao = '${dados.descricao}', preco = ${dados.preco} where id = ${idProduto}`, callback)
}
Admin.prototype.excluirProduto = function(id, callback){
    this._conexao.query(`delete from produto where id = ${id}`, callback)
}
module.exports = function(){

    return Admin;
}