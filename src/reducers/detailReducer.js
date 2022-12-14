const initialState = {game: {}, screen: {}, isLoading: true}

export const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DETAIL":
            return {
                ...state,
                game: action.payload.game,
                screen: action.payload.screen,
                isLoading: false,
            }
        case 'LOADING_DETAIL':
            return {
                ...state,
                isLoading: true,
            }
        default:
            return {...state}
    }
}