const conexao = function () {

    const mysql = require('mysql');

    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'restaurante_ifood'
    });


}

module.exports = conexao;