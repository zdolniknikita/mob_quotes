import React from 'react';

import ListQuotes from './ListQuotes'
import Control from './Control'

const Main = ( props ) => {

    const { next, previous, data, controlText } = props

    return (
        <>
            <ListQuotes {...props} data={data}/>
            <Control 
                next={next}
                previous={previous}
                text={controlText}
            />
        </>
    );
};

export default Main;