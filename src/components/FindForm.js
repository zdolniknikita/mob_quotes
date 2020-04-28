import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native'

const FindForm = ({ changeHandler, value }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input} 
                placeholder={'Find quotes'}
                onChangeText={changeHandler}
                value={value}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderBottomColor: '#a8a1a1',
        borderBottomWidth: 2
    },
    input: {
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#a8a1a1',
        padding: 5,
        margin: 10
    }
})

export default FindForm;