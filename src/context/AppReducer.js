export default (state, action) => {
    switch (action.type) {
        case 'SET_SEARCH_TEXT':
            return {
                ...state,
                searchText: action.payload,
            }
        case 'SET_SEARCH_HISTORY':
            return {
                ...state,
                history: [action.payload, ...state.history],
            }

        default:
            return state;
    }
}