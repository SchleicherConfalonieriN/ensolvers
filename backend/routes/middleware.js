import jwt from "jwt-simple";
import moment from "moment";


const CheckToken = (req,res,next) =>{
    if(!req.headers['user-token']){
        return res.json({error: 'Token dont exist'});
    }

    const userToken = req.headers['user-token'];
    let payload ={};

    payload = jwt.decode(userToken,"frase secreta");
/*
if(payload.expiredAt < moment().unix()){
    return res.json({erro: "expired token"})
}*/

req.userId = payload.userId;
next();
}

export default CheckToken;