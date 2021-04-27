import {combineReducers} from "redux"
import changeCategoryReducer from "./changeCategoryReducer"
import AddReducer from "./AddReducer"



const rootReducer = combineReducers({
    changeCategoryReducer,
    AddReducer
})

export default rootReducer;