const express = require('express');
const route = express.Router();

route.get('/', (req,res) => {
    res.render('index')
});

route.post('/jogarCarrinho')

module.exports = route