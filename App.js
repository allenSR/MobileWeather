import React, {useState, Component, timestamp, map} from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import {Header} from './src/Header';
import {Forma} from './src/Form';
import {Weather} from './src/Weather';

const API_KEY = '7e21ab7410d3d01775c3a23e1eb536a2';
const CityName = 'Krasnoyarsk';



class App extends Component {
  constructor(props) {
      super()
      
      this.state = {}
      this.handleClick = this.handleClick;
  }

  componentDidMount() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?&lang=ru&q=${CityName}&appid=${API_KEY}&units=metric`)
          .then(response => response.json())
          .then(data => {
              this.setState({
                  name: data.name,
                  temp: data.main.temp,
                  wind: data.wind.speed,
                  description: data.weather[0].description,
                  feels_like: data.main.feels_like
              },
              console.log(data))     
          });
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
          >
          </Weather>  
          <Forma /> 
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