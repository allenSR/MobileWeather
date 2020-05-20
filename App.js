import React, {Component} from 'react';
import {View} from 'react-native';
import {Header} from './src/Header';
import {Forma} from './src/Form';
import {Weather} from './src/Weather';

const API_KEY = '7e21ab7410d3d01775c3a23e1eb536a2';
const CityName = 'Krasnoyarsk';

class App extends Component {
  state = {};

  update = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?&lang=ru&q=${CityName}&appid=${API_KEY}&units=metric`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          name: data.name,
          temp: data.main.temp,
          wind: data.wind.speed,
          description: data.weather[0].description,
          feels_like: data.main.feels_like,
          humidity: data.main.humidity,
          sunset:data.sys.sunset,
          
        },  
          console.log(data))
      })   
  }

  componentDidMount() {
    this.update();
  }
  
  render() {
      return (
        
        <View> 
          <Header title = 'Погодное приложение'/>
          
          <Weather 
          name = {this.state.name}
          temp = {this.state.temp}
          wind = {this.state.wind}
          description = {this.state.description}
          feels_like = {this.state. feels_like}
          humidity = {this.state.humidity}
          sunset_date = {this.state.sunset_date}
          >
          </Weather>  
          <Forma update={this.update} />
        </View>
      ) 
  }
}

/*const styles = StyleSheet.create({
  container: {},
  b2:{
    marginTop:10,
    textAlign: 'center',
    fontSize: 18
  },
  Form: {},
  Weater: {}
});*/

export default App