// import React, { Component } from 'react';
// import './App.css';



// export default class StarWars extends Component {
//   render() {
//     return (
//         <div>
//             <h2>StarWars component works!!!</h2>
//         </div>
//     );
//   }
 import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'

class WeatherService extends Component{
  constructor(){
    super();
    this.state = {
      weatherData: null,
    }
  }

  componentDidMount(){
    const zip = this.props.zip;
    const apiURL = "https://swapi.co/api/" +
                    zip+"/";
    fetch(apiURL)
      .then( res => res.json() )
      .then( json => { this.setState({weatherData: json}) })
  }

  render(){
    const weatherData = this.state.weatherData;
    if(!weatherData) return ( <div>Loading data...</div> );
    return( 
     <div>
       <p>name:{weatherData.name}</p>
       <p>climate: {weatherData.climate }</p>
       <p>gravity: {weatherData.gravity}</p>
       <p>terrain: {weatherData.terrain}</p>
       <p>surface_water: {weatherData.surface_water}</p>
     </div>
    );
  }
}

const PLACES=[
  {name:"Planet1",zip:"1"},
  {name:"Planet2",zip:"2"},
  {name:"Planet3",zip:"3"},
  {name:"Planet4",zip:"4"},
];

export default class StarWars extends Component {
  constructor(){
    super();
    this.state = {
      activePlace : 0,
    }
  }

  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">
         
         {
           PLACES.map((place,index)=>(
             <button class='button is-primary' key={index}
                onClick={()=>{
                  this.setState({activePlace:index})
                }}>
                {place.name}             
             </button>
           ))}
          <WeatherService zip={ PLACES[activePlace].zip} key={activePlace} />
      </div>
    );
  }
}

//}