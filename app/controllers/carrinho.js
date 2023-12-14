module.exports.adicionar = async function(app, request, response){
    if(request.session.id_tipo_usuario =! 2)
    {  
       response.redirect('/')
       return;
    }
    const idProduto = request.params.idProduto;
    const idUsuario = request.session.id_usuario;

    const conexao = app.config.conexao;
    const modelPedido = new app.app.mpdels.modelPedido(conexao);
    const modelCarrinho = new app.app.mpdels.modelCarrinho(conexao);

    const pedidoAberto = await modelPedido.getPedidoAberto(idUsuario)

    if (!pedidoAberto){
        await modelPedido.criarpedido(idUsuario)
    }

    const idPedido = await modelPedido.getIdPedidoAberto(idUsuario);
    request.session.id_pedido = idPedido;

    const existeProduto = await modelCarrinho.existeProduto(idPedido, idProduto)

    if (existeProduto){
       await modelCarrinho.alterarQuantidade(idPedido, idProduto)
    }
    else
    {
        await modelCarrinho.inserirProduto(idPedido, idProduto)
    }
    response.redirect('/usuario/listar_produtos')
}
module.exports.listar_produtos_carrinho = async function (app, req, res) {
    const conexao = app.config.conexao;
    const modelCarrinho = new app.app.models.modelCarrinho(conexao);
    const modelProduto = new app.app.models.modelProduto(conexao);

    if (!req.session.id_pedido) {
        const erros = [{msg: 'Seu carrinho está vazio!'}];
        res.render('usuario/carrinho', {erros: erros, carrinho: [], valorTotal: 0});
        return;
    }

    const idPedido = req.session.id_pedido;

    let carrinho = await modelCarrinho.getProdutosPedido(idPedido);
    let valorTotal = 0;

    for (let i = 0; i < carrinho.length; i++) {
        const produto = await modelProduto.getProduto(carrinho[i].id_produto);

        carrinho[i].descricao = produto.descricao;
        carrinho[i].preco = produto.preco;

        valorTotal += carrinho[i].quantidade * produto.preco;
    }

    res.render('usuario/carrinho', {erros: {}, carrinho: produtos_pedido, valorTotal: valorTotal})
}