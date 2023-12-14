function Produto (conexao) {
    this._conexao = conexao;
    this._crypto = require('crypto');
}

Produto.prototype.getProdutos = function (callback) {
    this._conexao.query('SELECT * FROM produto', callback);
}

Produto.prototype.getProduto = function (idProduto) {
    return new Promise((resolve, reject) => {
        this._conexao.query(`SELECT * FROM produto WHERE id = '${idProduto}';`, function(errors, result) {
            resolve(result[0]);
        })
    })
}

module.exports = function () {
    return Produto;
}