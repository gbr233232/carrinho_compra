require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const session = require('express-session');
const path = require('path');
const flash = require('connect-flash');
const app = express();
const port = process.env.PORT||3006;


//connectDB

async function connectDB() {
    try{

    }catch(err){
        console.error('erro ao conectar ao Mongo:', err)
    }
}

app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}` )
})