import React from 'react'


const Login = () => {

    const [email,SetEmail] = useState('')
    const [password,SetPassword] = useState('');
    const [tipo,SetTipo] = useState('');

    const log = async (e) =>{
        e.preventDefault()
        axios.post(URL,{email:email, password:password})
        .then((res) => {     
            localStorage.setItem("apiData",res.data.token)
            localStorage.setItem("rol",res.data.rol)
      }).then(window.location.assign('http://localhost:3000/home'));
    }


    return(
            <form onSubmit={log}>
            <label>Email</label>
            <input input= "text"></input>
            <label>Password</label>
            <input input= "text"></input>
            </form>
          )
    }

export default Login