import React, {useState, setState, Component} from 'react';
import {Text, View, StyleSheet, TextInput, Button, Alert, ShadowPropTypesIOS} from 'react-native';
import App from '../App';
import { Weather } from './Weather';

const API_KEY = '7e21ab7410d3d01775c3a23e1eb536a2';
const CityName = 'Krasnoyarsk';
/*export const Forma = ({onSubmit})=>{
    const [value, setvalue] = useState("");
    var state = {}
    
     const pressHandler = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?&lang=ru&q=${CityName}&appid=${API_KEY}&units=metric`)
          .then(response => response.json())
          .then(data => {
              this.setState =({
                  name: data.name,
                  temp: data.main.temp,
                  wind: data.wind.speed,
                  description: data.weather.description,
                  feels_like: data.main.feels_like
              },
              console.log(data))     
          });

          /*<Weather 
          name = {this.state.name}
          temp = {this.state.temp}
          wind = {this.state.wind}
          description = {this.state.description}
          feels_like = {this.state. feels_like}
          ></Weather>
        
       
    };
    return(
        <View style = {styles.block}> 
            <View style = {styles.button_location}>
                <View style = {styles.unvisibleContainer}></View> 
                <Button style = {styles.button} title = 'Обновить' onPress = {pressHandler}/> 
                 
            </View>   
            <Text style = {styles.textImmediate}>Напишите название города, погоду, которого хотите узнать</Text>
            <View style = {styles.changeCity}>
                <TextInput type ="text" name = "city" onChangeText = {setvalue} value = {value} placeholder = "Узнать погоду" 
                style = {styles.TextInput}/>
                <Button style = {styles.button} title = 'Изменить город' onPress = {pressHandler}/>   
            </View>  
        </View>     
    ); 
};*/

export class Forma extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    pressHandler = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?&lang=ru&q=${CityName}&appid=${API_KEY}&units=metric`)
          .then(response => response.json())
          .then(data => {
              this.setState =({
                  name: data.name,
                  temp: data.main.temp,
                  wind: data.wind.speed,
                  description: data.weather.description,
                  feels_like: data.main.feels_like
              },
              console.log(data)),
              console.log('fdsf')     
          });

    };

    render() {
      return (
        <div>
          <h1>Привет, мир!</h1>
          
        </div>
      );
    }
  }
  

const styles = StyleSheet.create({
    button_location:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    block: {       
        
        height: 600,
        backgroundColor: "#2b2b2b",
        paddingRight: 10,
        paddingLeft: 10
    },
    textImmediate:{
        color: '#dbdce5',
        marginTop: 50,
        borderWidth:1,
        borderStyle: 'solid',
        borderColor: '#2b2b2b',
        borderTopColor: '#2b57c0',
        paddingTop: 5
    },

    TextInput:{
        color: '#000',
        borderStyle: 'solid',
        borderColor: '#2b57c0',
        borderWidth: 2,
        width: '50 %',
        marginRight: 5,
        fontSize: 14,
        height: 34,
        backgroundColor: '#fff',
        paddingLeft: 5
    },
    changeCity:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:10,
        marginTop: 5
        
    }
    

});