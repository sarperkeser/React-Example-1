import * as actionTypes from "./actionTypes";

export function Addname(name) {
    return {type:actionTypes.Add, payload: name}
  }