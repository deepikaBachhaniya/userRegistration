import './App.css';
import Home from './components/Home';
import Document from './components/Document';
import Registration from './components/Registration';
import Login from './components/Login';
import Index from './components/Navbar/Index';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useState } from 'react';


function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <div className='App'>
    <Router>
      <Switch>
        <Route exact path ="/">
          { 
          user && user._id ? <Home/> : <Login setLoginUser = {setLoginUser}/>
          }  
          </Route>
         <Route path = '/Login' >   
          <Login setLoginUser = {setLoginUser}/>
          </Route>
        <Route path='/Registration'><Registration/> Register</Route>
        <Route path='/Document'>
        <Document setLoginUser = {setLoginUser}/>
         </Route>
        <Route path='/Home'> <Home/> </Route>
        <Route path='/Index'> <Index/> </Route>
      </Switch>
    </Router>   
    </div>
  );
}
export default App;
