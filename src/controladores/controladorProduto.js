const produtos = [];

const cadastrarProduto = (req, res) => {
    const { nomeDoProduto, descricaoDoProduto, valorDoProduto, disponivelParaVenda } = req.body;

    const disponivelMinusculo = disponivelParaVenda.toLowerCase();

    const novoProduto = {
        nomeDoProduto,
        descricaoDoProduto,
        valorDoProduto, // Valor em centavos
        disponivelParaVenda: disponivelMinusculo
    }

    produtos.push(novoProduto);

    res.status(201).json(novoProduto);
};

const listarProdutos = (req, res) => {
    const produtosSelecionados = produtos.map(({ nomeDoProduto, valorDoProduto }) => ({ nomeDoProduto, valorDoProduto }));

    const ordenarProdutos = produtosSelecionados.sort((a, b) => a.valorDoProduto - b.valorDoProduto);

    return res.status(200).json(ordenarProdutos);
};

module.exports = {
    cadastrarProduto,
    listarProdutos
};