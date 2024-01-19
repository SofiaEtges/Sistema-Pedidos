module.exports.adicionar = async function(app, req, res){

    const idProduto = req.params.idProduto;
    const idUsuario = req.session.id_usuario;

    const conexao = app.config.conexao;
    const modelPedido = new app.app.models.modelPedido(conexao);
    const modelProdutoPedido = new app.app.models.modelCarrinho(conexao);
    
    //verifica se existe um pedido aberto
    const existePedidoAberto = await modelPedido.existePedidoAberto(idUsuario)

    if (!existePedidoAberto) {
        //cria um pedido
        await modelPedido.criarPedido(idUsuario);
    }

    //pega o id do pedido aberto
    const pedido = await modelPedido.getPedidoAberto(idUsuario);

    const idPedido = pedido[0].id

    //salva o id do pedido aberto em sessão
    req.session.id_pedido = idPedido;

    //verifica se o produto já foi adicionado no pedido aberto
    const existeProduto = await modelProdutoPedido.existeProduto(idProduto, idPedido)

    if (existeProduto) {
        await modelProdutoPedido.alterarQuantidade(idProduto, idPedido)
    }
    else {
        await modelProdutoPedido.inserirProduto(idProduto, idPedido)
    }
    res.redirect('/usuario/listar_produtos');
}
module.exports.listar_carrinho = async function (app, req, res) {
    const conexao = app.config.conexao;
    const idUsuario = req.session.id_usuario;
    const modelCarrinho = new app.app.models.modelCarrinho(conexao);
    const modelProduto = new app.app.models.modelProduto(conexao);
    const modelPedido = new app.app.models.modelPedido(conexao);
    let pedido = await modelPedido.existePedidoAberto(idUsuario);
    if (pedido == undefined){
        res.redirect ('carrinho/listar_produtos')
        return;
    }
    console.log(pedido[0])
    const idPedido = pedido[0].id;
    req.session.idPedido = idPedido;
   
    let carrinho = await modelCarrinho.getProdutosPedido(idPedido);
    let valorTotal = 0;

    for (let i = 0; i < carrinho.length; i++) {
        const produto = await modelProduto.getProduto(carrinho[i].id_produto);

        carrinho[i].descricao = produto.descricao;
        carrinho[i].preco = produto.preco;

        valorTotal += carrinho[i].quantidade * produto.preco;
    }

    res.render('usuario/listar_carrinho', {erros: {}, carrinho: carrinho, valorTotal: valorTotal})
}