const config = require('./routes/config')
const jwt = require('jsonwebtoken')
const Admin = {
    email: 'admin',
    password: 'admin',
    role: 'admin'
}
function authValidation(req,res,next){
    if(!req.body.email){
        res.status(404)
        res.error("You need to input your email");
    }else if(!req.body.password){
        res.status(404)
        res.error("You need to input your password");
    }
next();
}
function authToken(req,res,next){
    const token = req.cookies.access_token;
    if(!token){
        return res
                .sendStatus(401)
                .json({message: "you cannot get user information."})
        }
    try{
        const verified = jwt.verify(token,config.authentication.jwtSecret);
        console.log(verified);
        next();
    }catch (err){
        res.status(400).send('Invalid Token');
    }
}
function authRole(user){
    return (req,res,next)=> {
        const token = req.cookies.access_token;
        const verified = jwt.verify(token,config.authentication.jwtSecret);
        if(verified.role !== user){
            return res
                    .status(401)
                    .send("Not allowed");
        }
        next();
    }
}
module.exports={
    authValidation,
    authToken,
    authRole
}

