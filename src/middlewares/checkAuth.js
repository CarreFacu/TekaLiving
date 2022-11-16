const { verifyToken } = require("../utils/AuthJWT");


const isAuth = async (req,res,next) =>{
    try{

        //Si envia un token desde el header authorization
        let authHeader = req.headers.authorization
        const token = authHeader && authHeader.split(' ')[1]
        if (!token) {
            return res.status(403).json({message: 'debe proveer el token' });
        }
        const user = await verifyToken(token)
        req.user = user
        next()

    }catch(err){
        return res.status(403).json({message: 'Forbidden'})
    }

}

module.exports = isAuth

