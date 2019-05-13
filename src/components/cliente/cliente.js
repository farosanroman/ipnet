import React, { Component } from 'react'
import Datos from '../../components/cliente/datos'
import Reclamo from '../../components/cliente/reclamo'

export class Cliente extends Component {
    state={
        step:1,
        id:null,
        idcontrato:"",
        nombre:"pedro",
        apellido:"azpurua",
        telefono:"111",
        celular:"222",
        flagEmpresa:false,
        nombreempresa:"",
        pregunta1:0,
        pregunta2:0,
        pregunta3:0,
        
    }
    nextStep=()=>{
       const {step} =this.state;
       this.setState({
           step:step+1
       }
       )
    }
   
    prevStep=()=>{
        const {step} =this.state;
        this.setState({
            step:step-1
        }
        )
     }
     handleChange=input=>e=>{
        this.setState({[input]:e.target.value})
    }
    render() {
        const {step} =this.state;
        const {id,nombre,apellido,telefono, celular,pregunta1,pregunta2,pregunta3} =this.state;
        const values={id,nombre,apellido,telefono,celular};
      
        switch(step){
            case 1:
            return (
              <Datos nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
                )
                case 2:
                return (
                    <Reclamo nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} pregunta1={pregunta1} />
                  
                    )
                    case 3:
                    return (
                        <div>FIn</div>
    
                        )
                        

        }
  }
}

export default Cliente
