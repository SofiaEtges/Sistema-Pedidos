function Carrinho (conexao) {
  this._conexao = conexao;
  this._crypto = require('crypto');
}

Carrinho.prototype.existeProduto = function (idProduto, pedido) {
  return new Promise((resolve, reject) => {
    console.log(idProduto)
    this._conexao.query(`SELECT * FROM carrinho WHERE id_pedido =  ${pedido} AND id_produto = ${idProduto};`, function(errors, result) {
      console.log(errors)
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
    this._conexao.query(`UPDATE carrinho set quantidade = quantidade + 1 WHERE id_produto = ${idProduto} AND id_pedido = ${idPedido}`, function(errors, result) {
        
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

Carrinho.prototype.inserirProduto = function (pedido,idProduto) {
  return new Promise((resolve, reject) => {
    this._conexao.query(`INSERT INTO carrinho values (null, ${pedido}, ${idProduto}, 1)`, function(errors, result) {
      
        resolve(result);
    })
  })
}

module.exports = function () {
  return Carrinho;
}