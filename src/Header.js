import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Header = ({title})=>{
    return (
        <View style = {styles.info}>
            <Text style = {styles.text}>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    info: {
        justifyContent: "flex-end",
        height: 70,
        backgroundColor: '#2b57c0',
        alignItems: 'center',
        paddingBottom: 10
    },
    text: {
        color: '#fff',
        fontSize: 22
    }
});

