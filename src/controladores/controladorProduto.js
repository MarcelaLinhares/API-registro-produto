const produtos = [];

const cadastrarProduto = (req, res) => {
    const { nomeDoProduto, descricaoDoProduto, valorDoProduto, disponivelParaVenda } = req.body;

    const novoProduto = {
        nomeDoProduto,
        descricaoDoProduto,
        valorDoProduto,
        disponivelParaVenda
    }

    produtos.push(novoProduto);

    res.status(201).json(novoProduto);
};

module.exports = {
    cadastrarProduto
};