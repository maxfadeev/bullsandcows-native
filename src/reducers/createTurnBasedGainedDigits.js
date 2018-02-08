import { FETCH_DIGITS_SUCCESS } from '../constants/ActionTypes'

export default function createTurnBasedGainedDigits(turn) {
  function getDefaultState() {
    return {
      typedDigits: [],
      fetchedDigits: []
    }
  }

  return function(state = getDefaultState(), action) {
    switch (action.type) {
      case FETCH_DIGITS_SUCCESS:
        if (action.turn === turn) {
          return {
            typedDigits: [...state.typedDigits, action.typedDigits],
            fetchedDigits: [...state.fetchedDigits, action.fetchedDigits]
          }
        }
        return state
      default:
        return state
    }
  }
}
