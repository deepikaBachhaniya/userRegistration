import React, {useState} from 'react'
import axios from 'axios'
import { useHistory  } from 'react-router-dom'

 
function Registration() {

const history = useHistory()
    
const [user, setUser] = useState({
    email: "",
    password:"",
    con_password:""

})

const handleChange = e => {
    const{name,value} = e.target
    //console.log(email,value)
    setUser({
        ...user,
        [name]: value
    })

}

const register = () => {
    const { email, password ,con_password} = user
           if(email && password && ((password && con_password) && (password === con_password))) {
            axios.post("http://localhost:9002/Registration",user)
           .then(res => { alert(res.data.message)
            history.push('/Login')
            })
        }
            else{
                   alert("invalid input")
               }      
}
  return (
    <>
<div className="wrapper">
    {console.log("user",user)}
    <div className="text-center mt-4 name"> Registration </div>
    <form className="p-3 mt-3" action="">
        <div className="form-field d-flex align-items-center">
         <span className="far fa-user"></span> 
         <input type="email" name="email" id="email" placeholder="Email" 
         value={user.email} onChange= {handleChange}
         /> 
         </div>
        <div className="form-field d-flex align-items-center"> 
        <span className="fas fa-key"></span> 
        <input type="password" name="password" id="password" placeholder="Password" 
        value={user.password} onChange={handleChange}
        /> 
        </div> 

        <div className="form-field d-flex align-items-center"> 
        <span className="fas fa-key"></span> 
        <input type="con_password" name="con_password" id="con_password" placeholder="Confirm_Password" 
        value={user.con_password} onChange={handleChange}
        /> 
        </div> 
        <button className="btn mt-3" onClick={register}>Registration</button>
        
        <button className="btn mt-3" onClick={() => history.push('/Login')}>Login</button>
    </form>
   </div> 
    </>
  );
}

 
export default Registration
