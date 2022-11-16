const Producto = require('../models/productoSchema');
const MongoCRUD = require('../repository/crud');

class ProductoService extends MongoCRUD {

    constructor() {
        super(Producto);
    }
}

module.exports = new ProductoService();