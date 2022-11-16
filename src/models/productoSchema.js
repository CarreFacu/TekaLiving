const mongoose = require('mongoose');

const productos = mongoose.Schema({
    descripcion: { type: String, max: 400 },
    cantidad: { type: Number, require: true, max: 100 },
    createAt: { type: Date, default: new Date() }
});

const Productos = mongoose.model('productos', productos);

module.exports = Productos;