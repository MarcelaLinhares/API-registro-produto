const express = require('express');
const { cadastrarProduto, listarProdutos } = require('./controladores/controladorProduto');
const { validarProduto } = require('./intermediarios/validarProduto');

const rotas = express();

rotas.post('/produto', validarProduto, cadastrarProduto);
rotas.get('/produto', listarProdutos);

module.exports = rotas;