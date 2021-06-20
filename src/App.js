

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Home from './Components/Home/Home'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import AddOrder from './Components/AddOrder/AddOrder';
import NoteMatch from './Components/NotMatch/NoteMatch';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState } from "react";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    
    <Router>
  
    <div>
     
           <Header />
      <Switch>
      <Route path="/home">
        <Home></Home>
        </Route>
        <Route path ="/addOrder">
          <AddOrder></AddOrder>
        </Route>
        <Route path="/login">
        <Login></Login>
        </Route>
        <Route exact path="/">
        <Home></Home>
          </Route>
      </Switch>
      </div>
  </Router>
    


  );
}

export default App;
