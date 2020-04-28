import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const Control = ({ next, previous, text }) => {
    return (
        <View style={styles.control}>
            <TouchableOpacity 
                style={styles.button}
                onPress={previous}
            >
                <Text style={styles.text}> {'<'} </Text>
            </TouchableOpacity>

            <Text style={styles.text}> {text.current} of {text.total} </Text>

            <TouchableOpacity 
                style={styles.button}
                onPress={next}
                
            >
                <Text style={styles.text}> {'>'} </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    control: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 5   
    },
    button: {
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        borderRadius: 20,
        borderWidth: 1,
    },
    text: {
        fontSize: 25
    }
})

export default Control;