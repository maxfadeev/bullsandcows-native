import { SAVE_DIGITS } from '../constants/ActionTypes'
import { GUESS_TURN } from '../constants/Game'

function getDefaultState() {
  return {
    typedDigits: [],
    opponentDigits: []
  }
}

const guesses = (state = getDefaultState(), action) => {
  switch (action.type) {
    case SAVE_DIGITS:
      if (action.turn === GUESS_TURN) {
        return {
          typedDigits: [...state.typedDigits, action.typedDigits],
          opponentDigits: [...state.opponentDigits, action.opponentDigits]
        }
      }
      return state
    default:
      return state
  }
}

export default guesses
