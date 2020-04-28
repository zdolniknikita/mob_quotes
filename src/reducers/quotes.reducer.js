import { 
    QUOTES_LOADING, 
    QUOTES_LOADED, 
    QUOTES_ERROR,
    QUOTES_FILTERED
} from '../constans'

export const INITIAL_STATE = {
    loading: false,
    loaded: false,
    error: '',
    quotes: [],
    filteredQuotes: []
}

export const reducer = ( state, action ) => {

    switch( action.type ) {

        case QUOTES_LOADING:
            return {
                ...state,
                loading: true,
                loaded: false
            }
        
        case QUOTES_LOADED:
            return {
                ...state,
                loading: false,
                loaded: true,
                quotes: action.payload
            }
        
        case QUOTES_ERROR: 
            return {
                ...state,
                loading: false,
                loaded: false,
                err: action.payload
            }

        case QUOTES_FILTERED:
            return {
                ...state,
                filteredQuotes: state.quotes.filter(quote => {
                    return quote.symbol
                        .toLowerCase()
                        .indexOf(action.payload.toLowerCase()) !== -1 ? true : false
                })
            }
        default:
            return state
    }
}