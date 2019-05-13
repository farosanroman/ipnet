import React, { Component } from 'react'
//import mod from 'bootstrap'
import { Col, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
export class Reclamo extends Component {
    continue=e=>
    {
        //alert()
        e.preventDefault();
        this.props.nextStep();
    }
    back=e=>
    {
        //alert()
        e.preventDefault();
        this.props.prevStep();
    }
  render() {
      const {values,handleChange,pregunta1,pregunta2,pregunta3}=this.props
    return (
    <div>
    <Form>
    <h5>Tiene Problemas con su Conexion?</h5>
    <div className="radio">
          <label>
            <input type="radio" value="0" onChange={handleChange('pregunta1')} checked={pregunta1==0} />
            Option 1
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="1" onChange={handleChange('pregunta1')} checked={pregunta1==1}/>
            Option 2
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="2" onChange={handleChange('pregunta1')} checked={pregunta1==2}/>
            Option 3
          </label>
        </div>

   <br/>
   <h5>Cuantos Tiempo Ha Estado con el Problema</h5>
    <div className="radio">
          <label>
            <input type="radio" value="0" onChange={handleChange('pregunta1')} checked={pregunta1==0} />
            Horas
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="1" onChange={handleChange('pregunta1')} checked={pregunta1==1}/>
            Dias
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="2" onChange={handleChange('pregunta1')} checked={pregunta1==2}/>
            Semanas
          </label>
        </div>
        <br/>
   <h5>Quiere Ser Respondido </h5>
    <div className="radio">
          <label>
            <input type="radio" value="0" onChange={handleChange('pregunta1')} checked={pregunta1==0} />
            Correo
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="1" onChange={handleChange('pregunta1')} checked={pregunta1==1}/>
            Celular
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="2" onChange={handleChange('pregunta1')} checked={pregunta1==2}/>
            Visita
          </label>
        </div>
   <br/>
   <button onClick={this.back}>Back</button>
  
   <button onClick={this.continue}>Confirmar</button>
        </Form>        
    </ div >
    )
  }
}
export default Reclamo
