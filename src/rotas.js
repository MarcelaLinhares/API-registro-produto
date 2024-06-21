const express = require('express');
const { cadastrarProduto } = require('./controladores/controladorProduto');
const { validarProduto } = require('./intermediarios/validarProduto');

const rotas = express();

rotas.post('/produto', validarProduto, cadastrarProduto);

module.exports = rotas;