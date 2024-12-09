require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const session = require('express-session');
const flash = require('connect-flash');
const path = require('path')
const port = process.env.PORT||3006
const routes = require('./routes')

//connectDB
async function connectDB() {
    try{
        await mongoose.connect(process.env.CONNECTIONSTRING)
        console.log('conectado á base de dados')
        app.emit('pronto')
    }catch(err){
        console.error('erro ao conectar á base de dados', err)
        app.emit('erro')
    }
} 


connectDB()
app.use(express.urlencoded({ extended: true })); // Para requisições do tipo form-urlencoded
app.use(express.json()); // Para requisições do tipo JSON

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes)
app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`)
});