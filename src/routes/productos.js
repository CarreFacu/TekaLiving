const express = require('express');
const router = express.Router()
const controller = require('../controller/productos');
const isAuth = require("../middlewares/checkAuth");

router
    .get('/productos', isAuth, controller.findAll)
    .get('/productos/:id', isAuth, controller.findById)
    .post('/productos', isAuth, controller.createNew)
    .put('/productos/:id', isAuth, controller.updateProducto)
    .put('/productos/:id', isAuth, controller.deleteProducto)

module.exports = router;