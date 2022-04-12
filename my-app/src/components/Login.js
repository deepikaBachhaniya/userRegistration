import React, {useState} from 'react'
import axios from 'axios'
import { useHistory  } from 'react-router-dom'

 
function Login({setLoginUser}) {

    
const history = useHistory()
    
const [user, setUser] = useState({
    email: "",
    password:"",

})

const handleChange = e => {
    const{name,value} = e.target
    //console.log(email,value)
    setUser({
        ...user,
        [name]: value
    })

 }

 const login = () =>{
     axios.post("http://localhost:9002/Login", user)
     .then(res => {
        alert(res.data.message)
        setLoginUser(res.data.user)
        history.push('/')
     })

 }
  return (
    <>
<div className="wrapper">
    
    <div className="text-center mt-4 name"> Login </div>
    <form className="p-3 mt-3" action="">
        <div className="form-field d-flex align-items-center">
         <span className="far fa-user"></span> 
         <input type="text" name="email" id="email" placeholder="Email" 
         value={user.email} onChange={handleChange}
         /> 
         </div>
        <div className="form-field d-flex align-items-center"> 
        <span className="fas fa-key"></span> 
        <input type="password" name="password" id="password" placeholder="Password" 
        value={user.password}  onChange={handleChange}
        /> 
        </div> 
        <button className="btn mt-3" onClick = {login}>Login</button>
        <button className="btn mt-3" onClick = {() => history.push('/Registration')}>Register</button>
    </form>
</div>
    </>
  );
}

 
export default Login
