import React from 'react'
import axios from "axios";
import {useState} from 'react'
import {Link} from 'react-router-dom'



const Register = () => {
  
    const [name,setName] = useState('')
    const [lastname,setLastname] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('');
  
    const create = async (e) =>{
        e.preventDefault()
       
        axios.post(URL,{name:name,lastname:lastname,email:email, password:password})
        .then(window.location.assign('http://localhost:3000/login'));

    }

return (

    <div className= "FormContainer">
        <h2>Register</h2>
        <form onSubmit={create}>
        
        <label>Name </label>  <br></br>  
        <input  type={"text"} value={name} onChange={(e)=> setName(e.target.value)}></input>
        <br></br>
        <label>Last Name  </label>  <br></br>  
        <input type={"text"} value={lastname} onChange={(e)=> setLastname(e.target.value)}></input>
        <br></br>
        <label>Email    </label>  <br></br>  
        <input type={"text"} value={email} onChange={(e)=> setEmail(e.target.value)}></input>
        <br></br>
        <label>Password  </label><br></br>    
        <input type={"text"} value={password} onChange={(e)=> setPassword(e.target.value)}></input>
        <br></br>
        
        <input type={"submit"}></input>
     
        </form>
     </div>
    )
}


export default Register ;