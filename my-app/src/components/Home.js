import React, {useState} from 'react'
import './Homepage.css'
import {  Link } from "react-router-dom";
import axios from 'axios'
function Home() {


    
const [store, setUser] = useState({
   fname:"",
   lname:"",
   father:"",
   mother:"",
   dob:"",
   place:"",
   gender:"",
   phoneNo:"",   
	email: "",
    ano:"",
    pno:""

})

const handleChange = e => {
    const{name,value} = e.target
    setUser({
        ...store,
        [name]: value
    })

}


const Submit = () => {
            axios.post("http://localhost:9002/Home", store)
			.then(res => {
				alert(res.data.message)
			})
         
        }
    
  return (
    <>
	<form>
		<div id="personal-details">
		<h2 align="center">Personal Deatils    <button type="button" class="btn-secondary"><Link to = '/Document'> DocumentUpload</Link></button></h2>
			<table width="100%">
				<tr>
					<td>First Name</td>
					<td>
						<input type="text" placeholder="First Name" name='fname' value={store.fname} onChange={handleChange} size="25"/>
					</td>
					<td>Middle Name</td>
					<td>
						<input type="text" size="25"/>
					</td>
					<td>Last Name</td>
					<td>
						<input type="text" name='lname' value={store.lname} onChange={handleChange} size="25"/>
					</td>
				</tr>
				<tr>
					<td>Father's Name</td>
					<td>
						<input type="text"  placeholder="Father's Name" name='father' value={store.father} onChange={handleChange} size="25"/>
					</td>
					<td>Mother's Name</td>
					<td>
						<input type="text" placeholder="Father's Name" name = 'mother' value={store.mother} onChange={handleChange} size="25"/>
					</td>
				</tr>
				<tr>
					<td>Date of Birth</td>
					<td>
						<input type="date" name='dob' value={store.dob} onChange={handleChange}/>
					</td>
					<td>Place of Birth</td>
					<td>
						<input type="text" placeholder="Place of Birth" name='place' value={store.place} onChange={handleChange} size="25"/>
					</td>
				</tr>
				<tr>
					<td>Select Gender</td>
					<td>
						<input type="radio"   name='male' value={store.male} onChange={handleChange}/>Male
					</td>
					<td>
						<input type="radio"  name='female' value={store.female} onChange={handleChange}/>Female
					</td>
				</tr>
				<tr>
					<td>Mobile Number</td>
					<td>
						<input type="number" placeholder="9831****" name='phoneNo' value={store.phoneNo} onChange={handleChange} size="25"/>
					</td>
					<td>Email Id</td>
					<td>
						<input type="text" placeholder="your id@gmail.com" name='email' value={store.email} onChange={handleChange} size="25"/>
					</td>
				</tr>
		
				<tr>
					<td>Aadhar Number</td>
					<td>
						<input type="number" placeholder="Aadhar Number" name='ano' value={store.ano} onChange={handleChange} size="25"/>
					</td>
					<td>Pan Card Number</td>
					<td>
						<input type="number" placeholder="Pan Card Number" name='pno' value={store.pno} onChange={handleChange} size="25"/>
					</td>
				</tr>
			</table>
		</div>
		<tr>
 <td></td>
   <td>
     <input type="Submit"  onClick={Submit} class="button"/>
   </td>
   <td>
    <input type="Reset" value="Reset" class="button"/>
  </td>
  <td></td>
 </tr>
	</form>
</>
  
  );
}
 
export default Home 