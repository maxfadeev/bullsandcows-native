import { FETCH_DIGITS_SUCCESS } from '../constants/ActionTypes'
import { GUESS_TURN } from '../constants/Game'

function getDefaultState() {
  return {
    typedDigits: [],
    fetchedDigits: []
  }
}

const guesses = (state = getDefaultState(), action) => {
  switch (action.type) {
    case FETCH_DIGITS_SUCCESS:
      if (action.turn === GUESS_TURN) {
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

export default guesses
