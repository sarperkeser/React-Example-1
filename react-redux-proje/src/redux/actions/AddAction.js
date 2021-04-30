import * as actionTypes from "./actionTypes";

export function Addname(name,surname,date) {
    return {type:actionTypes.Add, payload: {name,surname,date}}
  }

