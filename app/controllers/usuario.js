const modelUsuario = require("../models/modelUsuario");

module.exports.cadastro_usuario= function(app, request, response){

    response.render('usuario/cadastro_usuario', {erros: {}, usuario: {}});

}
module.exports.cadastrar= function(app, request, response){
   
    const dados = request.body;
    request.assert('nome','Você deve preencher o campo Nome').notEmpty();
    request.assert('email','Você deve preencher o campo Email').notEmpty();
    request.assert('senha','Você deve preencher o campo Senha').notEmpty();
    request.assert('senha','Sua senha deve ter ao menos 4 caracteres').len(4)
    const erros = request.validationErrors();
    if(erros){
        response.render('usuario/cadastro_usuario', {erros: erros, usuario : dados});
        return;
    }
    const conexao = app.config.conexao;
    const modelUsuario =new app.app.models.modelUsuario(conexao);
    modelUsuario.getUsuarioEmail(dados.email, function (error, result){
        if(result.length >0){
            let erros = [{msg: 'Este e-mail já está sendo usado'}];
            response.render('usuario/cadastro_usuario', {erros: erros, usuario : dados});
            return;
        }
        else{
            modelUsuario.cadastrar(dados, function (error, result){
                response.redirect('/usuario/login');
            });
        }
    });
}
module.exports.usuario_login = function (app, request, response){
    if(request.session.id_tipo_usuario =! 2)
  {  
     response.redirect('/')
     return;
  }
    response.render('usuario/login', {erros: {}, usuario: {}})
}

module.exports.validar = function (app, request, response){
    const dados = request.body;
    
    request.assert('email', 'Você deve preencher o campo E-mail').notEmpty();
    request.assert('senha', 'Você deve preencher o campo Senha').notEmpty();
    const erros = request.validationErrors();
    if(erros){
        response.render('usuario/login', {erros: erros, usuario: dados});
        return;
    }
    const conexao = app.config.conexao;
    const modelUsuario = new app.app.models.modelUsuario(conexao);
    modelUsuario.getUsuario(dados, function(error, result){
        if(result.length <= 0){
            let erros = [{msg: 'Usuário não encontrado'}]
            response.render('usuario/login', {erros: erros, usuario: dados})
        }
        else{
            request.session.id_tipo_usuario = result[0].id_tipo_usuario;
            request.session.id_usuario = result[0].id;
            if (result[0].id_tipo_usuario == 1){
                response.render('admin/menu', {erros: {}, usuario: {}});
            }
            else if(result[0].id_tipo_usuario == 2) {
                response.render('usuario/menu', {erros: {}, usuario: {}});
            }
        }
    })
}
module.exports.sair = function(app, request, response){
    request.session.destroy(function (error) {
        response.redirect('/usuario/login');
    })
}

module.exports.editar = function (app, request, response){
    const idUsuario = request.session.id_usuario;
    const conexao = app.config.conexao;
    const modelUsuario = new app.app.models.modelUsuario(conexao);
    const modelTipoUsuario = new app.app.models.modelTipoUsuario(conexao);
    modelUsuario.getUsuarioById(idUsuario, function(error, usuario){
        modelTipoUsuario.getTipos(function(error, tipos){
            response.render('usuario/editarCadastro', {usuario: usuario, tipos: tipos, erros: {}})
        })
    })
  }
  module.exports.salvar = function (app, request, response){
    const idUsuario = request.params.idUsuario;
    const dados = request.body;
    const conexao = app.config.conexao;
    const modelUsuario =new app.app.models.modelUsuario(conexao);
    modelUsuario.salvar(dados, idUsuario, function(error, result) {
        response.redirect('/usuario/menu');
    });
  }

  module.exports.listar_produtos = function (app, req, res) {
    const conexao = app.config.conexao;
    const modelProduto = new app.app.models.modelProduto(conexao);

    modelProduto.getProdutos(function (error, result) {
        res.render('usuario/listar_produtos', {erros: {}, produto: result})
    });
}