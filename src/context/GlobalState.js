import { createContext, useReducer } from "react"; 
import AppReducer from './AppReducer';

// initial state
const initialState = {
    searchText: '',
    history: [], 
}

// create context
export const GlobalCtx = createContext(initialState);

// provider components
export const GlobalProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(AppReducer, initialState);

    // actions
    const setSearchText = (text) => {
        dispatch({
            type: 'SET_SEARCH_TEXT',
            payload: text,
        });
    }

    const setSearchHistory = (search) => {
        dispatch({
            type: 'SET_SEARCH_HISTORY',
            payload: search,
        });
    }

    return (
        <GlobalCtx.Provider value={{
            searchText: state.searchText,
            history: state.history,
            setSearchText,
            setSearchHistory,
        }}>
            { children }
        </GlobalCtx.Provider>
    );
}