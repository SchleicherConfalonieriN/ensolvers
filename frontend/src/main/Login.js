import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
const URL ='http://localhost:8000/api/user/login';


const Login = () => {

    const [email,SetEmail] = useState('')
    const [password,SetPassword] = useState('');


    const log = async (e) =>{
        e.preventDefault()
        axios.post(URL,{email:email, password:password})
        .then((res) => {  
            console.log(res)   
            localStorage.setItem("apiData",res.data.token)
            
      }).then(window.location.assign('http://localhost:3000/home'));
    }


    return(
    <div className="form_intro" >
            <form  onSubmit={log}>
                    <input type={"text"} value={email} onChange={(e)=> SetEmail(e.target.value)} placeholder="Email"></input>
                     <br></br>  
                    <input type={"password"} value={password} onChange={(e)=> SetPassword(e.target.value)}placeholder="Password"></input>
                   
                     <input type={"submit"}></input>
                    
            </form>
                <Link to={'/register'} className="btn"> <div>  Register</div> </Link>
            </div>
          )
    }

export default Login