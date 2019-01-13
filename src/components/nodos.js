import React, { Component } from 'react';
import Nodo from './nodo'
class Nodos extends Component {
 
    render() {
        let nodos;
        if(this.props.nodos){
          nodos = this.props.nodos.map(nodo => {
            //console.log(project);
            return (
              <Nodo  key={nodo.id} nodo={nodo} />
            );
          });
        }
        return (
            
          <div className="Nodos">
            <h3>Instalaciones</h3>
            <ul>
            {nodos}
            </ul>
          </div>
        );
      }
    }
    

//ProjectItem.propTypes = {
 // project: React.PropTypes.object,
 // onDelete: React.PropTypes.func
//}

export default Nodos;