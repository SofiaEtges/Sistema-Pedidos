module.exports = function (app) {
    app.post('/usuario/salvar/:idUsuario', function (request, response) {
        app.app.controllers.admin.salvar(app, request, response)
    })
    app.get('/admin/listar_usuario', function (request, response) {
        app.app.controllers.admin.listar_usuario(app, request, response)
    })
    app.get('/admin/sair', function (request, response) {
        app.app.controllers.admin.sair(app, request, response)
    })
    app.get('/usuario/editar/:idUsuario', function (request, response) {
        app.app.controllers.admin.editar(app, request, response)
    })
    app.get('/usuario/cadastro_usuario', function (request, response) {
        app.app.controllers.usuario.cadastro_usuario(app, request, response)
    })
    app.get('/usuario/excluir/:idUsuario', function (request, response) {
        app.app.controllers.admin.excluir(app, request, response)
    })
    app.get('/admin/cadastro_produto', function (request, response) {
        app.app.controllers.admin.cadastro_produto(app, request, response)
    })
    app.post('/admin/cadastrar', function (request, response) {
        app.app.controllers.admin.cadastrarProduto(app, request, response)
    })
    app.get('/admin/listar_produto', function (request, response) {
        app.app.controllers.admin.listar_produto(app, request, response)
    })
    app.get('/admin/editar/:idProduto', function (request, response) {
        app.app.controllers.admin.editarProduto(app, request, response)
    })
    app.post('/admin/salvar/:idProduto', function (request, response) {
        app.app.controllers.admin.salvarProduto(app, request, response)
    })
    app.get('/admin/excluir/:idProduto', function (request, response) {
        app.app.controllers.admin.excluirProduto(app, request, response)
    })
}