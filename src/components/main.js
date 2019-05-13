import React, { Component } from 'react';
//import { Navbar,Nav,NavItem,NavDropdown,MenuItem,NavbarBrand} from 'react-bootstrap'
//import {Navbar,Nav,NavItem} from 'react-bootstrap'
import {BrowserRouter as Router, Route,Switch,Redirect} from 'react-router-dom'
//port {LinkContainer} from 'react-router-bootstrap'
import Header from '../components/header'
import Home from '../components/home'
import Nodos from '../components/nodos'
import Cliente from '../components/cliente/cliente'
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      flag:0,     
      config:null,
     };
  }
  render() { 
    console.log("main")
      return(
        <Router>
           <div >
            <Header ></Header>
            <Switch>
            <Route path="/home" component={()=><Home/>}/>
            <Route path="/nodos" component={Nodos}/>            
            <Route path="/cliente" component={Cliente}/>            
          
            <Redirect to="/home"/>
            </Switch>         
           </div>
        </Router>
      )
  }

}
export default Main;