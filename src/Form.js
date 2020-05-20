import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

export class Forma extends React.Component {
    state = {};
    render() {
        return (
            <View style={styles.block}>
                <View style={styles.button_location}>
                    <View style={styles.unvisibleContainer}></View>
                    <Button style={styles.button} title='Обновить' onPress={this.props.update} />
                </View>
                <Text style={styles.textImmediate}></Text>
            </View>
        );
    }
}

// На всякий случай//
  /* <View style={styles.changeCity}>
   <Text style={styles.textImmediate}>Напишите название города, погоду, которого хотите узнать</Text>
                    <TextInput type="text" name="city" placeholder="Узнать погоду"
                        style={styles.TextInput} />
                    <Button style={styles.button} title='Изменить город' onPress={this.props.update} />
                </View>*/
//---------------------------------//

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
        paddingLeft: 10,
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