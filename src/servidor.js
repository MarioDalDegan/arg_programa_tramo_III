require('dotenv').config()

const express = require('express');
const app = express();
const usuarioRouter = require( './routes/usuarioRoutes.js')

const PORT = 3000;

/*
app.get('/', (req, res) => {
    res.send('Hola mundo!');
});
*/
app.use(usuarioRouter)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
