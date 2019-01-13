import React, { Component } from 'react';

class Nodo extends Component {
 
  render() {
    //alert(JSON.stringify(this.props.nodo))
    return (
        
      <li className="Nodo" align="left">
        <strong id="enlacde">{this.props.nodo.direccion.edificacion}</strong>[<strong >{this.props.nodo.elemento}</strong>]: {this.props.nodo.descripcion} 
      </li>
    );
  }
}

//ProjectItem.propTypes = {
 // project: React.PropTypes.object,
 // onDelete: React.PropTypes.func
//}

export default Nodo;