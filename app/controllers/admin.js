const { response } = require("express");
const conexao = require("../../config/conexao");

module.exports.listar_usuario = function(app, request, response){
  if(request.session.id_tipo_usuario != 1){
      response.redirect('/usuario/login')
      return;
  }
  
  const conexao = app.config.conexao;
  const modelUsuario = new app.app.models.modelUsuario(conexao);

  if(request.session.id_tipo_usuario =! 1)
  {  
     response.redirect('/')
     return;
  }

  modelUsuario.listar_usuario(function (error, result){
      response.render('admin/listar_usuario', {usuario: result})
  })
}

module.exports.excluir = function(app, request, response){
  if(request.session.id_tipo_usuario =! 1)
  {  
     response.redirect('/')
     return;
  }
  const idUsuario = request.params.idUsuario;
  const conexao = app.config.conexao;
  const modelUsuario = new app.app.models.modelUsuario(conexao);

  modelUsuario.excluir(idUsuario, function(error, result){
      response.redirect('/admin/listar_usuario')
  })
}

module.exports.editar = function (app, request, response){
  if(request.session.id_tipo_usuario =! 1)
  {  
     response.redirect('/')
     return;
  }
  const idUsuario = request.params.idUsuario;

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
      response.redirect('/admin/listar_usuario');

  });
}

module.exports.sair = function(app, request, response){
  request.session.destroy(function (error) {
      response.redirect('/usuario/login');
  })
}

//produto

module.exports.cadastro_produto = function(app, request, response)
{
  if(request.session.id_tipo_usuario =! 1)
  {  
     response.redirect('/')
     return;
  }
   response.render('admin/cadastro_produto',{erros:{}, produto:{}})
}

module.exports.cadastrarProduto = function(app, request,response)
{
  if(request.session.id_tipo_usuario =! 1)
  {  
     response.redirect('/')
     return;
  }
  const dados = request.body
  const conexao = app.config.conexao
  const modelAdmin = new app.app.models.modelAdmin(conexao)

  const erros = request.validationErrors();

    if(erros){
        response.render('admin/cadastro_produto', {erros: erros, produto : dados});
        return;
    }
  modelAdmin.cadastrarProduto(dados, function(error, result){
    response.redirect('/admin/listar_produto')
  })
  
}
module.exports.listar_produto = function(app, request, response){
  if(request.session.id_tipo_usuario =! 1)
  {  
     response.redirect('/')
     return;
  }
  const conexao = app.config.conexao;
  const modelAdmin = new app.app.models.modelAdmin(conexao);

  modelAdmin.listar_produto(function (error, result){
      response.render('admin/listar_produto', {produto: result})
  })
}
module.exports.editarProduto = function (app, request, response){
  if(request.session.id_tipo_usuario =! 1)
  {  
     response.redirect('/')
     return;
  }
  const idProduto = request.params.idProduto;

  const conexao = app.config.conexao;
  const modelAdmin = new app.app.models.modelAdmin(conexao);

  modelAdmin.getProdutoById(idProduto, function(error, idProduto, dados)
      {
          response.render('admin/editarProduto', {produto: idProduto, dados: dados, erros: {}})
      })
  
}
module.exports.salvarProduto = function (app, request, response){
  const idProduto = request.params.idProduto;
  const dados = request.body;
      
  const conexao = app.config.conexao;
  console.table(dados)
  const modelAdmin =new app.app.models.modelAdmin(conexao);
  modelAdmin.salvarProduto(dados, idProduto, function(error, result) {
      response.redirect('/admin/listar_produto');

  });
}
module.exports.excluirProduto = function(app, request, response){
  if(request.session.id_tipo_usuario =! 1)
  {  
     response.redirect('/')
     return;
  }
  const idProduto = request.params.idProduto;

  const conexao = app.config.conexao;
  const modelAdmin = new app.app.models.modelAdmin(conexao);

  modelAdmin.excluirProduto(idProduto, function(error, result){
      response.redirect('/admin/listar_produto')
  })
}


