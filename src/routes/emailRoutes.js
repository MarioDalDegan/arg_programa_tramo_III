const emailRouter = require('express').Router()
const{
       enviarEmail,
    } = require('/../controllers/emailController.js');

emailRouter.post( '/enviarEmail', enviarEmail )

module.exports = emailRouter;
