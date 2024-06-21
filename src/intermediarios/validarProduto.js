const validarProduto = (req, res, next) => {
    const { nomeDoProduto, descricaoDoProduto, valorDoProduto, disponivelParaVenda } = req.body;

    if (!nomeDoProduto || !descricaoDoProduto || !valorDoProduto || !disponivelParaVenda) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' });
    }

    if (typeof nomeDoProduto !== 'string' ||
        typeof descricaoDoProduto !== 'string' ||
        typeof valorDoProduto !== 'number' ||
        (disponivelParaVenda.toLowerCase() !== 'sim' &&
            disponivelParaVenda.toLowerCase() !== 'não')
    ) {
        return res.status(400).json({ mensagem: 'Tipos de dados inválidos.' });
    }

    next();
};

module.exports = {
    validarProduto
};