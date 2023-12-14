module.exports = function (app) {

    app.post('/usuario/cadastrar', function (request, response) {
        app.app.controllers.usuario.cadastrar(app, request, response)
    })
    app.get('/usuario/login', function(request, response){
        app.app.controllers.usuario.usuario_login(app, request, response)
    })
    app.post('/usuario/validar', function(request, response){
        app.app.controllers.usuario.validar(app, request, response)
    })
    app.get('/usuario/sair', function(request, response){
        app.app.controllers.usuario.sair(app, request, response)
    })
    app.get('/usuario/editar', function(request, response){
        app.app.controllers.usuario.editar(app, request, response)
    }) 
    app.get('/usuario/salvar', function(request, response){
        app.app.controllers.usuario.salvar(app, request, response)
    }) 
    app.get('/usuario/listar_produtos', function(request, response){
        app.app.controllers.usuario.listar_produtos(app, request, response)
    })
}


