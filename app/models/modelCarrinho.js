function Carrinho (conexao) {
  this._conexao = conexao;
  this._crypto = require('crypto');
}

Carrinho.prototype.existeProduto = function (idPedido, idProduto) {
  return new Promise((resolve, reject) => {
      this._conexao.query(`SELECT * FROM carrinho WHERE id_pedido =  ${idPedido} AND id_produto = ${idProduto};`, function(errors, result) {
          if (result.length == 0) {
              resolve(false);
          }
          else {
              resolve(true);
          }
      })
  })
}

Carrinho.prototype.alterarQuantidade = function (idPedido, idProduto) {
  return new Promise((resolve, reject) => {
      this._conexao.query(`UPDATE carrinho set quantidade = quantidade + 1 WHERE pedido = ${idPedido} AND produto = ${idProduto}`, function(errors, result) {
          resolve(result);
      })
  })
}

Carrinho.prototype.adicionar = function (idPedido, idProduto) {
  return new Promise((resolve, reject) => {
      this._conexao.query(`INSERT INTO carrinho VALUES (NULL, ${idPedido}, ${idProduto}, 1);`, function(errors, result) {
          resolve(result);
      })
  })
}

Carrinho.prototype.getProdutosPedido = function (idPedido) {
  return new Promise((resolve, reject) => {
      this._conexao.query(`SELECT * FROM carrinho WHERE id_pedido =  ${idPedido};`, function(errors, result) {
          resolve(result);
      })
  })
}

module.exports = function () {
  return Carrinho;
}