import React from 'react';
import {  Link } from "react-router-dom";
function Header (){
  return (
    <>
  <div className = 'navbar'>
  <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="/">WebSiteName</a>
    </div>
    <ul class="navbar-right">
      <li><Link to = '/Registration'> Sign Up </Link></li>
       <Link to = '/Login'>Login</Link>
    </ul>
  </div>
</nav>
</div>
</>
 );
}
export default Header;