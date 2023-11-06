const georefRouter = require('express').Router()
const { obtenerProvincias } = require( './../controllers/GeoRefController.js')

georefRouter.get('/obtenerProvincias', obtenerProvincias );

module.exports = georefRouter;