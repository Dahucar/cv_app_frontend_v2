import { types } from "../types/types";

const initialState = {
    isOpen: false,
    isLoading: false
}

export const uiReducer = ( state = initialState, action) => {
    switch ( action.type ) {
        case types.uiStartModal:
            return {
                ...state,
                isOpen: true
            }
        
        case types.uiStartLoadingModal:
            return {
                ...state,
                isLoading: true
            }
        
        case types.uiFinishLoadingModal:
            return {
                ...state,
                isLoading: false
            }
        
        case types.uiFinishModal:
            return {
                ...state,
                isOpen: false
            }

        default:
            return state;
    }
}