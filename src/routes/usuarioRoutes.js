const usuarioRouter = require('express').Router()
const {verUsuarios,
    verUsuario,
    crearUsuario,
    editarUsuario,
    eliminarUsuario
    } = require( './../controllers/usuarioControllers.js') // desestructura objeto

// Ver usuarios
usuarioRouter.get('/usuarios',verUsuarios )

// Ver usuario
usuarioRouter.get('/usuario',verUsuario )

// Crear usuario
usuarioRouter.post('/usuario',crearUsuario )

// Editar usuario
usuarioRouter.put('/usuario',editarUsuario )

// Eliminar usuario
usuarioRouter.delete('/usuario', eliminarUsuario )

module.exports = usuarioRouter