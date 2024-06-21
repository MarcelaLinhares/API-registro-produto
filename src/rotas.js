const express = require('express');
const { cadastrarProduto } = require('./controladores/controladorProduto');

const rotas = express();

rotas.post('/produto', cadastrarProduto);

module.exports = rotas;