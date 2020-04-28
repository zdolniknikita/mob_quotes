import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'
import axios from 'axios'

import { detailUrl } from '../../constans'

const Details = ({ route }) => {

    const [qoute, SetQuote] = useState({})

    useEffect(() => {

        const { symbol } = route.params
        axios
            .get(`${detailUrl}?q=${symbol}`)
            .then(res => {
                console.log(res.data)
                SetQuote(res.data[0])   
            })
    }, [])

    return (
        <View style={styles.container}>
            <View>
                {
                    Object.keys(qoute).map(key => (
                        <Text key={key} style={styles.text}>{key}: {qoute[key]}</Text>
                    ))
                }
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 25
    }
})

export default Details;