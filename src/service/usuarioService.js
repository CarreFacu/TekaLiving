const Usuario = require('../models/usuarioSchema');
const MongoCRUD = require('../repository/crud');
const bcrypt = require("bcrypt");
const {generateToken} = require("../utils/AuthJWT");

class UsuarioService extends MongoCRUD {

    constructor() {
        super(Usuario);
    }

    async login(email, password){
        try{
            let user = await Usuario.findOne( { email: email })

            if(!user) return undefined

            if( !bcrypt.compareSync(password, user.password) ) return undefined

            delete user.password

            const token = await generateToken(user)

            user.token = token

            return user

        }catch(err){
            throw err
        }

    }

}

module.exports = new UsuarioService();