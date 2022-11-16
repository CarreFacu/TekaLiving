const UsuarioService = require('../service/usuarioService');

class UsuarioController {

    constructor() {
    }


    async findAll(req, res) {
        const listadoUsuarios = await UsuarioService.findAll()
        res.send({status: "Ok", data: listadoUsuarios})
    }

    async findById  (req, res ){
        const Usuario = await UsuarioService.findById(req.params.id)
        res.send({ status: "Ok", data: Usuario})
    }

    async createNew  (req, res ){

        const data = req.body

        let user = await UsuarioService.getOneBy({email: data.email})
         if (user){
             return res.status(403).json({error: "El usuario ya existe"})
         }
        const usuario = await UsuarioService.create(data)
        res.send({ status: "Ok", data: usuario})
    }

    async logIn  (req, res ){

        const { email, password } = req.body

        let user = await UsuarioService.login(email, password)

        if(!user) return res.status(400).json({ message: 'Invalid Credentials'})

        return res.json(user)
    }

    async updateUsuario (req, res ){
        const usuario = await UsuarioService.update(req.params.id, req.body)
        res.send({ status: "Ok", data: usuario})
    }
    async deleteUsuario  (req, res ){
        const usuario = await UsuarioService.remove(req.params.id)
        res.send({ status: "Ok", data: usuario})
    }

}
module.exports = new UsuarioController();