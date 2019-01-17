import React, { Component } from 'react';
import { Card,CardHeader,CardFooter,Col, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
class Cliente  extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cliente: {nombre:"pedro",apellido:"azpurua"}
    }
    this.handleChange = this.handleChange.bind(this);
}

handleChange (event) {
  this.setState({
      inputvalue: event.target.value
  })
}
  render() { 
    let {cliente } = this.state;
      return(
        <div >    
        <Col>
        <Card style={{ width: "20rem" }} >
         
          <CardBody body inverse color="danger">
            <CardTitle className="font-weight-bold">Cliente XYX</CardTitle>
            <CardText>
              Enlace Suer XXX
            </CardText>
            <CardText>
              Deuda: 12$ (35 dias)
            </CardText>
            <Button href="#" color="danger">Corte</Button>
          </CardBody>
        </Card>
      </Col>
      
    </div>
        
      )
    
  }
}
//npm i devextreme@18.2.1-pre-18268

export default Cliente;
//https://blog.logrocket.com/an-imperative-guide-to-forms-in-react-927d9670170a