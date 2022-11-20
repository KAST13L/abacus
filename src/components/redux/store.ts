import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counter-reducer";

const rootReducer = combineReducers({
    state: counterReducer
})

export const store = legacy_createStore(rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>



