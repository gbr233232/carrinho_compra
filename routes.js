const express = require('express');
const route = express.Router();


const cadastroController = require('./src/controllers/produtoController')


route.get('/', cadastroController.index);
route.post('/register', cadastroController.register);

module.exports = route; 
