import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export  class Weather extends Component {
    render(){
        return (
            <View style = {styles.block}>
                     <Text style = {styles.text, styles.currentSity }>Текущий город: 
                        <Text style = {{fontStyle: 'italic'}}> {this.props.name}</Text> 
                     </Text>
                     <Text style = {styles.temp, styles.text}>Tемпература: {this.props.temp} °С</Text> 
                     <Text style = {styles.text}>Ощущается как: {this.props.feels_like} °С</Text> 
                     <Text style = {styles.wind, styles.text}>Ветер: {this.props.wind} м/с</Text>
                     <Text style = {styles.description,  styles.text} >Осадки: {this.props.description}</Text>
                     <Text style = {styles.text}>Влажность: {this.props.humidity}%</Text>     
            </View>
        )
    }
}
        
const styles = StyleSheet.create({
    block:{
        height: 200,
        backgroundColor: '#2b2b2b',
        
    },

    text: {
        paddingTop: 5,
        paddingLeft: 20,
        color: '#dbdce5',
        fontSize: 16,
        paddingBottom: 5
    },
    currentSity:{
        color: '#fff',
        paddingTop: 15,
        paddingRight: 10,
        fontSize: 16,
        marginBottom: 15,
        textAlign: 'right',
    }
});

