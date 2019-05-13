import React, { Component } from 'react'
//import mod from 'bootstrap'
import { Col, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
export class Datos extends Component {
    continue=e=>
    {
        //alert()
        e.preventDefault();
        this.props.nextStep();
    }
  render() {
      const {values,handleChange}=this.props
    return (
    <div>
    <Form>
    <input type="text" name="nombre" value={values.nombre} onChange={handleChange('nombre')} ref="name" />
    <br/>
    <input type="text" name="apellido" value={values.apellido} onChange={handleChange('apellido')} ref="name" />
    <br/>
    <input type="text" name="telefono" value={values.telefono} onChange={handleChange('telefono')} ref="name" />
    <br/>
    <input type="text" name="celular" value={values.celular} onChange={handleChange('celular')} ref="name" />
    <br/>
    <div>
          <input type="checkbox"
              checked={ true }
              onChange={handleChange('celular')}
	              />
               Empresa             
              
            </div>

   <br/>
   <button onClick={this.continue}>Encuesta</button>
        </Form>        
    </ div >
    )
  }
}
export default Datos

/*
 <Form onSubmit={this.handleSubmit}>
        <FormGroup row>
          <Col sm={9}>
          <Label for="Nombre" >Correo</Label>

            <Input type="input" name="nombre" value={values.nombre}  id="nombre" placeholder="Nombre" />
          </Col>
        </FormGroup>
        </Form>
        */