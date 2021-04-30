import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";


export default function AddReducer(state = initialState.name1, action) {
    switch (action.type) {
        case actionTypes.Add: {
            return [...state, { ...action.payload }]
        }
        default:
            return state;
    }
}