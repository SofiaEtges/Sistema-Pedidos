function Pedido (conexao) {
    this._conexao = conexao;
    this._crypto = require('crypto');
}

Pedido.prototype.existePedidoAberto = function (idUsuario) {
    return new Promise((resolve, reject) => {
        this._conexao.query(`SELECT * FROM pedido WHERE id_usuario = ${idUsuario} AND id = 1;`, function(errors, result) {
            if (result.length == 0) {
                resolve(false);
            }
            else {
                resolve(true);
            }
        })
    })
}

Pedido.prototype.criarPedido = function (idUsuario) {
    return new Promise((resolve, reject) => {
        this._conexao.query(`INSERT INTO pedido VALUES(NULL, ${idUsuario}, 1, NULL);`, function(errors, result) {
            resolve(result);
        })
    })
}

Pedido.prototype.getPedidoAberto = function (idUsuario) {
    return new Promise((resolve, reject) => {
        this._conexao.query(`SELECT * FROM pedido WHERE id_usuario = ${idUsuario} AND id_status = 1;`, function(errors, result) {
            resolve(result);
        })
    })
}

module.exports = function () {
    return Pedido;
}