const Produto = require('../models/ProdutoModel')

exports.index = async (req,res) =>{
    try {
        const produtos = await Produto.buscaProdutos();
        console.log('produtos:', produtos); // Exibe os dados no terminal
        res.render('index', { produtos });
    } catch (e) {
        console.error('Erro no controlador index:', e);
        res.render('404'); // Renderiza página de erro em caso de falha
    }
}

exports.register = async (req,res) =>{
    const produto = new Produto(req.body);
    console.log(req.body)
    await produto.register();
    
    res.redirect('/')

}

