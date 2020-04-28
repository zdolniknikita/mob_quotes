import React, { useContext, useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native'
import axios from 'axios'

import FindForm from '../FindForm'
import MainList from '../MainList'
import FilteredList from '../FilteredList'

import { AppContext } from '../../../App'
import { QUOTES_LOADING, QUOTES_LOADED, QUOTES_FILTERED } from '../../constans'
import { quotsUrl } from '../../constans'

const Home = (props) => {

    const { state, dispatch } = useContext(AppContext)

    const [data, setData] = useState(state.quotes)
    const [filter, setFilter] = useState('')
    const [step, setStep] = useState(10)
    const [countStart, setCountStart] = useState(0)
    const [countEnd, setCountEnd] = useState(step)

    const next = () => {

        if( filter ) {
            if( countEnd >= state.filteredQuotes.length ) return
            setCountStart(countStart + step)    
            setCountEnd(countEnd + step)    
        } else {
            if( countEnd >= state.quotes.length ) return
            setCountStart(countStart + step)    
            setCountEnd(countEnd + step) 
        }
    }

    const previous = () => {

        if( countStart <= 0 ) return
        setCountStart(countStart - step)    
        setCountEnd(countEnd - step)    
    }

    const changeHandler = (payload) => {

        setFilter(payload)
        dispatch({
            type: QUOTES_FILTERED,
            payload
        })
    }

    useEffect(() => {
        setCountStart(0)
        setCountEnd(step)
    }, [filter])

    useEffect(() => {

        dispatch({ type: QUOTES_LOADING })

        axios
            .get(quotsUrl)
            .then(res => dispatch({
                type: QUOTES_LOADED,
                payload: res.data.quotesList
            }))
            .catch(err => console.log('Error fetching: ', err))

    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column', width: '100%' }}>
            <FindForm 
                changeHandler={changeHandler}
                value={filter}
            />
            {
                filter ? 
                    <FilteredList 
                        {...props.navigation} 
                        data={state.filteredQuotes.slice(countStart, countEnd)} 
                        next={next} 
                        previous={previous}
                        controlText={{
                            current: countEnd >= state.filteredQuotes.length ? state.filteredQuotes.length : countEnd, 
                            total: state.filteredQuotes.length 
                        }}     
                    /> : 
                    <MainList 
                        {...props.navigation} 
                        data={state.quotes.slice(countStart, countEnd)} 
                        next={next} 
                        previous={previous}
                        controlText={{
                            current: countEnd >= state.quotes.length ? state.quotes.length : countEnd, 
                            total: state.quotes.length 
                        }} 
                    />
            }
        </View>
    );
};

export default Home;