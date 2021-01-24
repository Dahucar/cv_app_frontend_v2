import { combineReducers } from "redux";
import { skillReducer } from "./skillReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
    ui: uiReducer,
    skill: skillReducer
});