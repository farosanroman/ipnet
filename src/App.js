import React, { Component } from 'react';
import Nodos from './components/nodos';
import GoogleMaps from 'simple-react-google-maps';

//import MapView from './components/map';

import logo from './ipnet.png';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      nodos: [],
      todos:[]
    }
  }
  getNodos(){
    
    this.setState({nodos: [
      {
        "id": "0002",
        "type": "nodo",
        "elemento": "Enlace_RF",
        "descripcion": "Para el transporte de datos, en el ancho de banda requerido por los usuarios de Internet, se\nrequiere instalar, en la azotea del Edificio Sede Gerencial, un sistema de por lo menos dos (2)\nenlaces de radio frecuencia (RF). Los enlaces operan en bandas de frecuencias públicas y de libre\nuso que no requieren autorización alguna por parte de la Comisión Nacional de Telecomunicaciones\n(CONATEL).",
        "direccion": {
            "estado": "Miranda",
            "municipio": "Baruta",
            "parroquia": "Baruta",
            "urbanizacion": "Colinas de Valle Arriba",
            "zona": "D",
            "calle": "Silvia Sayden",
            "edificacion": "Punta Larga",
            "propietario": "Condominio",
        }},
        {
          "id": "0003",
          "type": "nodo",
          "elemento": "Enlace_RF",
          "descripcion": "Para el transporte de datos, en el ancho de banda requerido por los usuarios de Internet, se\nrequiere instalar, en la azotea del Edificio Sede Gerencial, un sistema de por lo menos dos (2)\nenlaces de radio frecuencia (RF). Los enlaces operan en bandas de frecuencias públicas y de libre\nuso que no requieren autorización alguna por parte de la Comisión Nacional de Telecomunicaciones\n(CONATEL).",
          "direccion": {
              "estado": "Miranda",
              "municipio": "Baruta",
              "parroquia": "Baruta",
              "urbanizacion": "Centro Plaza",
              "zona": "D",
              "calle": "Silvia Sayden",
              "edificacion": "Vista al Valle",
              "propietario": "Condominio",
          }},
  
    ]});
  }
  componentWillMount(){
    //this.getProjects();
    this.getNodos();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Infaestructura de IPNET</h1>
        </header>
        <table><tr><td>
        <GoogleMaps
  apiKey={'AIzaSyAIbEcob4vSkEpy1XUzw4v-ukdHAORHsD0'}
  style={{height: "400px", width: "100%"}}
  zoom={6}
  center={{lat: 37.4224764, lng: -122.0842499}}
  markers={{lat: 37.4224764, lng: -122.0842499}} //optional
/>
        
          </td><td>
        <p className="App-intro">
         
        
        <Nodos nodos={this.state.nodos}  />
        </p>
        </td></tr></table>
      </div>
    );
  }
}

export default App;
