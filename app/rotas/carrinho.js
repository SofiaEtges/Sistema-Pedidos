module.exports = function (app) {
    app.get('/carrinho/adicionar/:idProduto', function (req, res) {
        app.app.controllers.carrinho.adicionar(app, req, res);
    });
    
    app.get('/carrinho/listar_produtos', function (req, res) {
        app.app.controllers.carrinho.listar_carrinho(app, req, res);
    });
    app.get('/carrinho/listar_carrinho', function (req, res) {
        app.app.controllers.carrinho.listar_carrinho(app, req, res);
    });
}