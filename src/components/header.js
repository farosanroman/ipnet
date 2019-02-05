import React, { Component } from 'react';
import {
  Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink, UncontrolledDropdown,
  DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';
  //https://stackoverflow.com/questions/23116591/how-to-include-a-font-awesome-icon-in-reacts-render
  //https://iconawesome.com/icon-package/font-awesome
  //npm install --save font-awesome
  import 'font-awesome/css/font-awesome.min.css';
  import logo from '../images/ipnet2.jpg';
//import 'bootstrap-social/bootstrap-social.css';
// import {NavLink} from 'react-router-dom'
 //import logo from '../farocirculo.png';
class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() { 
      return(
        
<div>
<Navbar color="secondary" dark  expand="md">
          <NavbarToggler color="dark" onClick={this.toggle} />
          <NavbarBrand className="mr-auto" href="/">
             <img src={logo} height="30" alt="Plataforma BizAccount" />  
         </NavbarBrand> 
          
         <NavbarBrand href="/">IpNet</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/home/">
                <span className="fa fa-home"></span>Home
                </NavLink>
              </NavItem>
              
              <NavItem>
                
                <NavLink href="/nodos/"><span className="fa fa-user-circle"></span>Clientes</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/nodos/"><span className="fa fa-snowflake-o"></span>Infaestructura</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Servicios
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <span className="fa fa-life-ring"></span>Soporte
                   
                  </DropdownItem>
                  <DropdownItem>
                  <span className="fa  fa-bell-o"></span>Reclamos
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <span className="fa fa-retweet"></span>Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
       </div> 
      )
    
  }
}

export default Header;