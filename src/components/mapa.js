import React, { Component } from 'react';
import  MapGL,{Layer,Feature,ZoomControl,GeoJSONLayer,Popup} from 'react-mapbox-gl';
import {clientes} from '../data/clientes.json';
import {rutas} from '../data/rutas.json';
import {nodos} from '../data/nodos.json';
//console.log(rutas)
const TOKEN="pk.eyJ1IjoiZmFyb21hcGJveCIsImEiOiJjamt6amF4c3MwdXJ3M3JxdDRpYm9ha2pzIn0.V8cqmZH6dFIcxtKoaWcZZw"
const Map = MapGL({
  accessToken: TOKEN
});
let centro=[-66.8566,10.4841]
const flyToOptions = {
  speed: 0.5
};
 const circleLayout= MapGL.CircleLayout = { visibility: 'visible' };
 const lineLayout = {
  'line-cap': 'round' ,
  'line-join': 'round'
};
const linePaint = {
  'line-color': 'crimson',
  'line-width': 2
};
//const puntos=rutas.points;
var i=0
var RUTAS = [];

var PUNTOS=[]
rutas.forEach(function (ruta) {
  var R=[]
  
  ruta.features.forEach(function (punto) {
      R.push(punto.geometry.coordinates);
      PUNTOS.push(punto)
    })
  RUTAS.push(R)
});
//alert(JSON.stringify(PUNTOS))
//const mappedRoute = RUTAS.map(
//  point => point.geometry.coordinates
//);  
//alert(JSON.stringify(mappedRoute))
const mappedRoute0 = rutas[0].features.map(
    point => point.geometry.coordinates
  );
  //alert(JSON.stringify(mappedRoute0))
 // const mappedRoute1 = rutas[1].features.map(
  //  point => point.geometry.coordinates
//});
//console.log(mappedRoute)
const circlePaint= MapGL.CirclePaint = {
  'circle-color': 'dodgerblue'
};
const symbolLayout= MapGL.SymbolLayout = {
  'text-field': '{place}',
  'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
  'text-offset': [0, 0.6],
  'text-anchor': 'top'
};
const symbolPaint= MapGL.SymbolPaint = {
  'text-color': 'black'
};
const layoutLayer = { 'icon-image': 'londonCycle' };
let image = new Image();
//https://onlineimagetools.com/convert-image-to-base64
image.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAEJklEQVQ4T22UbUxbVRjH/6eU2zJa2gIbSMtaxtohMCgwMsEpRZRJlvFinBlkJMM4FJlkIhhnooMPxkwRSTTyIgQWX8KASBGdSogrEJBNCGwF/SAKCzImhVIKtPT29l7TC3uJ83w75zzn97yc5/8Q/M869fnvBhZsGgFn4DhOTzMcGBaTAkJMlAAD7SUHTf99Rh48ON06K6fdjlZCkMtxAM2wcNAeHNIEIFYlAe1mMfyHFXMrLqNILi8yFkXY7r6/BypomtYD6CYEGi/EvsUgSS1FVXYEb2u1rsJf7AvRLglmlzZw9oupOXlAQN7XxTGT3nse5I3ERTsmOHAaluPgoFlkxwfjzJNhaPtuGLWXByH0D4TAV4wwhRjd7+RhfYtBXt31OU24JqGtKMLGgwqapo0O2pMjFfsgNIDiU6rL16G87jJ+nl6GLv4wRLukfGS0m8Ga1YIfzxtQ2/ULhhZFbcaypCLiLayDdl99OjoQJQYl4KEBHwr9o1M419iPmMNPgSVCUD474QNY3/KgJC0EscEcCuvHodq7L50UNJqr7C72Qu9rcXjufAumbzvw6vFEdHZ1QRp3DHFR+xEXJkbnuAX+lACEELgYFskaCd58Vo2YM01ITEmrJic+M5sUEmFaY2EU9C/WIiY1C06nE26HDRJFCBoKtJBJfPDe93/jxvw6KKGAB6Xsk6I8U43m3lF8MyMcILmf3rB1l8bJhsfNKK3pQExGPu+VZQGZnxD1p0LgmZhDy+Zu9JlXIPYV8LVa3XAhXelCxYnHcLKmz0Y6xiy2rANiWWzhRSQ+ngF/RSg4joWH9TYhQecre8FOzqLWIsfojB1i3/utt7C8jh/eSEbP4M018tui0zQyei3tyzEbwiOjwXrcvMdNlwcl6SokKByQBAXDjxIh/d0rUKojAG+j7RT9ray9ELlXB0jvhKUqOQwXjn0whEhdFAjHwmvGckBSuB+yVVbcsaxi7M9lXPmLQKmN50Ecx+GOnca3ZXr0j0xUk9xPJgzdZ/VX5y12NAwuYtXJQeFPYWphE88nh+KIwsJ/v42hUP6VGSqNFrZNF4QCoDQjHJnRgThe2ZDOJ5z74aCx8qgqJ/XgthwAFocqelDz8jMI2ZrhZSEP2oMn3u7BT+/nQyUT3pNoxcftlz4qzz+9DWqdlW8tLUyu/TOvZpxr8DAMpKFqNJcdhXXmVyiCgqHV6pBU2oIjqSkI8dzG0ooVgzfnbsnkOr2pLm9bIjsy0UNAjISD2ru3ORi0Fz+KievDCAl9BDqdDpmVrZBHJoN2OQGGuUX5+eV2libcF+1dGD9GGEcbgBz7lgc9xfsxNHINYUoltFotXrrYgTXpAYhEoku+PuJzXrE+NEYenEsn680GihIaml/YbRgeM+uVPChisrq5zzS5scdkfD35ocH2L/6luCRndMPRAAAAAElFTkSuQmCC"
image.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFJElEQVRYR+2Xe2xTdRTHv+ferrKNjGEMi1mG8lLiVDBLJCAJG7232y1OReODRBEfmRECOLYWMAozMQq9HROjEokBMfIHPmYWYm8ft2wCOpSHkrD4AJSXosBg0z1c23uP6WCmLe06dAn/8Pvr9vc7v3M+Oc9fCVd50VW2j2sA/8kDyxz6LYLBU0nABoB6DTYXWijrgFsrO3WlIb0igLriNmv32NPfE2EsAEuSsT7T4BUev/zGlUAMGWBB6eYRY3KKvgBwN5u8MsrGJw3+iiMxY9XlO4qzyKyGgGfY5GWqT24YKsSQAVyO4KcMkqKGMKPBP7st2cDD+Ei8WRntBUg2w5hWH5L2DgViSADLy33FLFoOMeMDVZOeHEyxy6GfZ+Bz1Ss9MWwALiXYysBdx7QLuR/jEWNwgNA2Zp6rapJ1WACqp3+VnZXfcxLAe25NWpFJaW2Ffqcg4KBp8AMev9yUST5jCJZLwVFspXYCXGu90rqYwhq7f7IgZhUYRuTndYHyGFzCcir6Nww+5NHkp4cLoAOMx92atDWm0KkEu4gol4FzpklL2IzuzgtbL9S1lHXFzuvAQuf01usaWmf0DhsAR8w5atDuXTFz12gzr+98smJmMIAoAb8wsJt6xdXulsyNaaghSPCASwkeBtFEZrTQn933cVZeLlvDtwmiUMlERQQ8BMBkRkO0jxoadth+TeeJtAAvlDbnW6zhW0VT+IGtdN404fT4LuZAplVVsj0nryC7SWDMAjhiGuY4T6D8TKp76QDI6dBPEuAzo8ZSEoXfCLTerUmrMhmPOyeXFJwMKzUzkN3Th/Fvh6T25PuXASxW9uRl018/MdP1poE59QEp6FL0gwDnuDV50mAAVVJwVL6VVrFJZ1WfbU1MdpndX2QRxSYQplCYx63V5RPxOi4DcFYEFpAgbGYDiuqXfP1KlOB8C9EWAzSr3mvbmRqCyaXof4OovwGxSa+qPtvLse9YbyDCd0T8odsrz08LUFfabOnONsIAa6omz4kXdCl6B4MP52rStDqQmQxRVbIvK7+gIxy3v9PtlWYN/HaW64tIxFsRQ7g9fpYkeMDp0O8loKm7D2OS4+VU9FeI0J8DzPhM1aQHkyFqleBhgWgimPdwr2Wu2lL2e7yM06FfINPc5PbZawb2EwBcjtBqMC+OdOQUJTcRV4X+GgSsvATAqiYJ8cprZoduEkfwMdPkRo9PjpXhZcvl0PeCccStSfNSAjiVwCqQUN0p9hZu3F7Zk0Bv1x8lCzYz2MpMHk/cXFhY2jxyZHa0jUFFRoRL1unytykBFL2VwWdUTb4/tQfK9TIWEBIiPHqtLncmK1lq0wtE0bDmha2n61rKov/GVwmeIKIiNqhE9dsOpKsUp0M/BeZGVZOXpASoKnk3K79gQqyfH+344+iUjfufiwxWdrXlukQiv0+gQmYsVzXJnda4PbiYLPQmMx5TNWlbSoDYptPRPBUw9oF5S9Q0Xh94diWEQwncQyQuAngeGF1s4Fk10K80llOxmZCwXI7QUwBvYkBXvZKctgzjXPo8Eb1zKeHOEdDIscoGzWDgDqKL/yfYxN7Os72lG/dX9tRUNM8UBWMXM2/tM8w1X7Yf+7HshvF2Emg9ESYAOO322goBSgBMOwuccmASLCQNgAzAmcxfA8KLTDha77UdH9ivVUKVBG4kSnotM/tB/JLba9+XKjwZp+HFS3VCVcmNYqac6JcsbrN2FZ7Kj30fD3S2Z3rCDRFgsFT8f2fXAP4BqThCP2qaOWYAAAAASUVORK5CYII="
//console.log(image)
const images= ['londonCycle', image];
//console.log(image)
class Mapa extends Component {    
  constructor(props){
    super(props);    
    this.state={
      lineas:RUTAS,
      puntos:PUNTOS,
      rutas:rutas,
      nodos:nodos,
      center:centro,
      zoom:[13],
      flagPopup:false ,
      properties:null,
      coordinates:[],
      comentario:"comentario"
    }
   //this.markerClick = this.markerClick.bind(this)
    //this.onChangeEstrato=this.onChangeEstrato.bind(this)  
  }

getCirclePaint = (color) => ({
    'circle-radius': 6,
    'circle-color': color,
    'circle-opacity': 1.0
  });
    markerClickBorrar = (evt) => {
      //alert(JSON.stringify(evt))
      console.log(evt)
    this.setState({
      center: [-66.8566,10.4841],
      zoom: [14],
      nodoclick:{"nodo":"nombre del nodo","coordenadas":[-66.86286,10]},
      flagPopup:true

    });
  };
  markerClick = (evt,e) => {
    //alert(JSON.stringify(evt))
    //alert(JSON.stringify(a))
    //console.log(evt)
  this.setState({
    center: evt.coordinates,
    zoom: [14],
    properties:evt.properties,
    flagPopup:true

  });
};
    render() {

      //const { styleKey } = this.state;
    let {zoom,center,properties,flagPopup,nodos,lineas,puntos,comentario } = this.state;
    const N=nodos.features;
    let i =0;
    //alert(JSON.stringify(N))
    comentario=this.props.comentario
    //console.log({flagPopupTestigo})
         let sanroman=[{id:1,nombre:"San Roman"}]
         //var roman={id:1,nombre:"San Roman"}
         var ii=0;
         const SOURCES=N.map(nodo=>{  
           //sources proveedores de enlaces   
           ii+=1;
            return(
              <Feature              
                   key={ii} 
                   coordinates={nodo.geometry.coordinates}             
                   onClick={this.markerClick.bind(this, {properties:nodo.properties,coordinates:nodo.geometry.coordinates})}
           />    
                )     
          }) 
          const PTOS=puntos.map(subnodo=>{     
            ii+=1;
             return(
               <Feature              
                    key={ii} 
                    coordinates={subnodo.geometry.coordinates}             
                    onClick={this.markerClick.bind(this, {properties:subnodo.properties,coordinates:subnodo.geometry.coordinates})}
            />    
                 )     
           }) 
          const RUTAS=lineas.map(linea=>{     
            ii+1
            return(
               <Rutas              
                    key={ii} 
                    coordenadas={linea}             
                    //onClick={this.markerClick.bind(this, {properties:subnodo.properties,coordinates:subnodo.geometry.coordinates})}
                />    
                 )     
           }) 
           return(
        <div>
        <Map           
          style="mapbox://styles/mapbox/light-v9"
          center={center} 
          zoom={zoom}
          containerStyle={{height: "60vh",width: "80vw"}}        
          onMove={(map) => { 
            const bounds = map.getBounds()
            //console.log(bounds)
            //alert(JSON.stringify(bounds))
            this.props.onsetbounds(bounds)
          }}
          flyToOptions={flyToOptions}
        > 
         {RUTAS}
        <Layer
        type="symbol"
        id="marker2"
        layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={[-66.95286,10]}/>       
      </Layer>
     
      
      
      <Layer type="symbol" id="marker34" layout={{ 'icon-image': 'londonCycle' }} images={images}>
            {SOURCES}
      </Layer>
        {flagPopup && (
        <Popup key={'88'} coordinates={center}>            
              <div>{properties.lugar}</div>
              <div>
                Nodo Principal<br/>
                {properties.direccion}
              </div>            
          </Popup>
        )}
      <Layer type="symbol" id="marker3" layout={{ 'icon-image': 'londonCycle' }} images={images}>
         
        </Layer>
        
        <Layer
        type="circle"
        id="marker7"
        paint={this.getCirclePaint('purple')}>
        {PTOS}      
      </Layer>
     
        <GeoJSONLayer
          data={clientes}
          circleLayout={circleLayout}
          circlePaint={circlePaint}
         
          symbolLayout={symbolLayout}
          symbolPaint={symbolPaint}
        />
        
          <ZoomControl position={"bottomRight"} />
          </Map>
          <span  className="badge badge-secondary">{comentario}</span>
         
          
</div>
        )    
     }
 }

 class Rutas extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { image:this.props.src };
   }
  render(){
    //let {image} = this.state;
    return(
     
      <Layer type="line" layout={lineLayout} paint={linePaint}>
            <Feature coordinates={this.props.coordenadas} />
        </Layer>
    )
  }

}
export default Mapa;