// We speciify the name of the action as a variable
export const ADD_TO_COUNTER = 'ADD_TO_COUNTER'
export const MINUS_TO_COUNTER = 'MINUS_TO_COUNTER'

// This is an action creator, it simply specifies the action.
// this is what we call to send an action.
export function addToCounter() {
  return {
    type: ADD_TO_COUNTER
  }
}
export function minusToCounter() {
  return {
    type: MINUS_TO_COUNTER
  }
}
