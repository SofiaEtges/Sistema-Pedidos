module.exports = function (app) {
    app.get('carrinho/adicionar/:idProduto', function (req, res) {
        app.app.controllers.carrinho.adicionar(app, req, res);
    });

    app.get('carrinho/carrinho', function (req, res) {
        app.app.controllers.carrinho.listar_produtos_carrinho(app, req, res);
    });
}