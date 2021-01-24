import { types } from "../types/types";

const initialState = {
    skillActive: null,
    isLoading: false,
    skillItems: []
}

export const skillReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.skillLoadItems:
            return {
                ...state,
                skillItems: [ ...action.payload ]
            }

        case types.skillStartLoadingPage:
            return {
                ...state,
                isLoading: true
            }

        case types.skillFinishLoadingPage:
            return {
                ...state,
                isLoading: false
            }

        case types.skillSetActive:
            return {
                ...state,
                skillActive: action.payload
            }

        case types.skillResetActive:
            return {
                ...state,
                skillActive: null
            }
        default:
            return state;
    }
}
