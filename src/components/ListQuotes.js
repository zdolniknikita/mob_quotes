import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native'

import ListItem from './ListItem'

const ListQuotes = ({ data, navigate }) => {

    return (
        <View style={styles.container}>
            {
                data.length ? (
                    data.map(quote => <ListItem navigate={navigate} key={quote.symbol} symbol={quote.symbol}/>)
                    ) : (
                        <Text>Not founded</Text>
                    )
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        margin: 10,
        marginLeft: 10,
        borderColor: 'black',
        borderWidth: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        // alignItems: 'center'
    },
    item: {
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
        margin: 20
    }
})

export default ListQuotes;