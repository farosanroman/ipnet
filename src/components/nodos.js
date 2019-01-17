import React, { Component } from 'react';
import Mapa from '../components/mapa'
import { Card,Row,Col,CardBlock,CardHeader,CardFooter, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import Cliente from '../components/cliente'
import {nodos} from '../data/nodos.json';

//https://www.youtube.com/watch?v=qFb1FWcdFq8&list=UUAx4nmhI7S1RcPiaG-Uw0tg&index=6
//https://www.youtube.com/watch?v=qFb1FWcdFq8&index=6&list=UUAx4nmhI7S1RcPiaG-Uw0tg
//https://www.youtube.com/watch?v=TJBZYm29bDo&list=UUAx4nmhI7S1RcPiaG-Uw0tg&index=5
//CARDS PICO Y PALA
//https://codepen.io/alexdevero/pen/pRjNmW
//https://codepen.io/alexdevero/pen/pRjNmW
//https://codepen.io/jamiehalvorson/pen/VmrBaP
class Nodos extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      flag:0,     
      config:null,
      xu:{_ne:{lat:100,lng:0},_sw:{lat:0,lng:-100}}
     };
  }
  onSetBounds = (xu) => {  
    
    this.setState({xu:xu})
    //alert(JSON.stringify(this.state.xu))
}
  render() { 
      //const clientes=[1,2,3]
      //alert(JSON.stringify(this.state.xu))
      const clientes=nodos.features
      //console.log(clientes)
      const {xu} =this.state
      //console.log(this.state.xu)
      let i=0;
      return(
        
        <div>
          <Mapa onsetbounds={this.onSetBounds}/>
        <div className="container-fluid" style={{marginLeft: '2px'}}>   
        <div className="d-flex flex-row">                    
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="card-deck">
            {clientes.map(function(item,index){
              i+=1;
              //console.log("xuuuu")
              //console.log(xu._ne.lat+" "+xu._sw.lat)
                if 
                ((item.geometry.coordinates[1]<xu._ne.lat)
                &&(item.geometry.coordinates[1]>xu._sw.lat)
                &&(item.geometry.coordinates[0]<xu._ne.lng)
                &&(item.geometry.coordinates[0]>xu._sw.lng)
                ){
                    return (
                        <ContentItem item={item} key={i} />
                    )
                    
                 }}
                 
                 )}
         </div>
       </div>       
     </div>
    </div>      
           </div>
           
            
        
      )
    
  }
}

class ContentItem extends React.Component {
    render(){
      return(
       
        <Row >
          <Col xs="1" />
         <Col xs="6" sm="6" >
           <Card style={{ width: "20rem" }}>
            <CardBody>
              <CardTitle className="font-weight-bold">
              {this.props.item.properties.place}
              </CardTitle>
              <CardSubtitle className="font-italic">Luis 0412-6340672</CardSubtitle>
              <CardText>
              Contrato:#1234-10Mega<br/>
              Moneda US$-30$ 2 cuotas vencidas<br/>
              3 reclamos-2 mensajes cobro
              </CardText>
              <Button href="#" color="danger">Corte</Button>
            </CardBody>
           </Card>
         </Col>
        </Row>
      )
    }

}
export default Nodos;
// <h1>{this.props.item.properties.place}</h1>
/*
  <div className="container-fluid" style={{marginLeft: '5px'}}>
   
    <div className="d-flex flex-row">                    
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="card-deck">
        {clientesC}
     </div>
   </div>
   
 </div>
</div>
*/