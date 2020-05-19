import React, {useState, Component} from 'react';
import {Text, View, StyleSheet, timestamp} from 'react-native';
import App from '../App';

const API_KEY = '7e21ab7410d3d01775c3a23e1eb536a2';
const CityName = 'Krasnoyarsk';

export  class Weather extends Component {
   
    
        
    
    render(){
        return (
            <View style = {styles.block}>
                     <Text style = {styles.text, styles.currentSity }>Текущий город: {this.props.name}</Text>
                     <Text style = {styles.temp, styles.text}>Tемпература: {this.props.temp} °С</Text> 
                     <Text style = {styles.text}>Ощущается как: {this.props.feels_like} °С</Text> 
                     <Text style = {styles.wind, styles.text}>Ветер: {this.props.wind} м/с</Text>
                     <Text style = {styles.description,  styles.text} >Описание: {this.props.description} тыры-пыры</Text>      
            </View>
        )
    }
}
        

const styles = StyleSheet.create({
    block:{
        height: 140,
        backgroundColor: '#2b2b2b',
        

    },
    text: {
        paddingTop: 5,
        paddingLeft: 10,
        color: '#dbdce5',
        fontSize: 16,
        //fontFamily: 'Arial'
    },
    currentSity:{
        color: '#fff',
        paddingTop: 15,
        paddingLeft: 10,
        fontSize: 16,
    }
});

