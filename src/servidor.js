require('dotenv').config()

const express = require('express');
const app = express();
const fileUpload = require( 'express-fileupload');

const bodyParser = require('body-parser')

const usuarioRouter = require( './routes/usuarioRoutes.js');
const autenticacionRouter = require('./routes/autenticacionRoutes.js');
const archivoRouter = require('./routes/autenticacionRoutes.js');

const PORT = 3000;

//Middleware
app.use( bodyParser.json());
app.use(fileUpload());


app.use(usuarioRouter)
app.use(autenticacionRouter)
app.use(archivoRouter);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
