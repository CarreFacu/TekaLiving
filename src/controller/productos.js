const ProductoService = require('../service/ProductoService');

    class ProductoController {

        constructor() {
        }
    
        
    async findAll(req, res) {
        const listadoProductos = await ProductoService.findAll()
        res.send({status: "Ok", data: listadoProductos})
    }

    async findById  (req, res ){
        const producto = await ProductoService.findById(req.params.id)
        res.send({ status: "Ok", data: producto})
    }

    async createNew  (req, res ){
        const producto = await ProductoService.create(req.body)
        res.send({ status: "Ok", data: producto})
    }

    async updateProducto (req, res ){
        const producto = await ProductoService.update(req.params.id, req.body)
        res.send({ status: "Ok", data: producto})
    }
    async deleteProducto  (req, res ){
        const producto = await ProductoService.remove(req.params.id)
        res.send({ status: "Ok", data: producto})
    }
    
}
module.exports = new ProductoController();