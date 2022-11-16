const express = require('express');
const router = express.Router()
const controller = require('../controller/usuario');

router
    .get('/usuarios', controller.findAll)
    .get('/usuarios/:id',  controller.findById)
    .post('/usuarios',  controller.createNew)
    .post('/usuarios/login',  controller.logIn)
    .put('/usuarios/:id',  controller.updateUsuario)
    .put('/usuarios/:id',  controller.deleteUsuario)

module.exports = router;