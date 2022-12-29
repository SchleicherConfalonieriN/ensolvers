import userModel from "../models/userModel.js"
import moment from 'moment';
import jwt from 'jwt-simple';



const CreateToken = (user) => {

    const payload = {
        userId : user.id,
        createdAt : moment().unix(),
        expiredAt : moment().add(5,'minutes').unix()
    };

    const res = {
        token: jwt.encode(payload,'frase secreta')
    }
    return res ;
}



//register

export const Register= async (req,res)=>{
    try {
        await userModel.create(req.body)
        res.json({"message":"registro creado correctamente"})
    } catch (error) {
        res.json({message:error.message})
    }
}

//login


export const Login = async (req,res)=>{
    const user = await userModel.findOne({where:{
        email: req.body.email,
        password: req.body.password
    }})
    if (user){
        res.json(CreateToken(user));
    }else{
        res.json({error: 'wrong email or password'});
    }
}

//update


export const updateuser = async(req,res)=>{
    try{
        console.log(req.body);
        const userToken = req.headers['user-token'];
        let payload ={};
        payload = jwt.decode(userToken,"frase secreta");
        req.userId = payload.userId;
        
        await userModel.update(req.body,{ 
                where:{ id: req.userId}}
        )
                res.json("updated")
        } catch (error) {
                res.json( {message: error.message} )
        }
    }




    
    const first= async (req,res)=>{
        try {
            const { count, rows } =   await userModel.findAndCountAll();
            console.log(count)
            if (count === 0) {
                console.log("entro")
                await userModel.create({
                    email:"n",
                    password:1,
                    name:"pruba",
                    lastname:"prueba2"
                })  
            }
        } catch (error) {
            
        }
    }
export default first