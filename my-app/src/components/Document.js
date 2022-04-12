import React from 'react'
import { useHistory  } from 'react-router-dom'

function Document(){
  
const history = useHistory()
    return(
      <>
      
<div class="container">
  <h2>Document Upload   <button type="button" class="btn-secondary" onClick = { () =>  history.push('/Login') }>Logout</button> </h2>            
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Document</th>
        <th>File</th>
        <th>Edit/delete</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>10th</td>
        <td><input type="file" id="myFile" name="filename"/>
  </td>
  <td> <input type="View" value="View" class="button"/>&nbsp;&nbsp;  <input type="Delete" value="delete" id = 'delete' class="button"/> </td>

      </tr>
      <tr>
        <td>12th</td>
        <td><input type="file" id="myFile" name="filename"/></td>
        <td> <input type="View" value="View" class="button"/>&nbsp;&nbsp;  <input type="Delete" value="delete" id = 'delete' class="button"/> </td>

      </tr>
      <tr>
        <td>AdharCard</td>
        <td><input type="file" id="myFile" name="filename"/></td>
        <td> <input type="View" value="View" class="button"/>&nbsp;&nbsp;  <input type="Delete" value="delete" id = 'delete' class="button"/> </td>

      </tr>
    </tbody>
  </table>
</div>

      </>
    );
}

export default Document