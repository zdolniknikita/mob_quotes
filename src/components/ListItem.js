import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

const ListItem = ({ symbol, navigate }) => {

    const pressHandler = ( symbol ) => () => {
        navigate('Details', { symbol })
    } 

    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={pressHandler(symbol)}
        >
            <Text style={styles.text}> {symbol} </Text>   
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
        margin: 5,
        padding: 2
    },
    text: {
        fontSize: 25
    }
    
})

export default ListItem;