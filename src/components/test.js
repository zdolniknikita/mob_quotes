import React, { useState, useEffect, useContext } from 'react';
import { Text, View } from 'react-native' 

import { AppContext } from '../../App'
import { QUOTES_LOADING, QUOTES_LOADED } from '../constans'

const Test = () => {

    const { state, dispatch } = useContext(AppContext)
    const { loading, loaded, error, quotes } = state

    useEffect(() => {

        dispatch({ type: QUOTES_LOADING })
        fetch('https://quotes.instaforex.com/api/quotesList')
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: QUOTES_LOADED,
                    payload: res.quotesList
                })
            })
            .catch(err => console.log('Error: ', err.msg))
    }, [])
    return (
        <View>
            {
                loading ? ( 
                        <Text>Loading</Text>
                    ) : (
                    <Text> Quotes length - { quotes.length } </Text>
                )
            }
        </View>
    );
};

export default Test;