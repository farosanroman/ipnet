import React, { Component } from 'react';
import logo from '../images/ipnet.jpg';
function ResponsiveImage( { src, width, height } ) {
    return (
      <div
        style={ { width } }
        className="responsive-image">
        <div style={ { paddingBottom: ( height / width * 100 ) + '%' } } />
        <img
          src={ src }
          className="responsive-image__image" 
          alt=""
          />
          
      </div>
    );
  }
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      flag:0,     
      config:null,
     };
     
  }
  
  render() { 
      return(
        <div className="Appp">
        <ResponsiveImage
            src={logo}
            width={223 }
            height={ 200 } 
        />
       
        </div>
        
      )
    
  }
}
//npm i devextreme@18.2.1-pre-18268

export default Home;