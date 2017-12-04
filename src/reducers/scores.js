import { SAVE_DIGITS } from '../constants/ActionTypes'
import { SCORE_TURN } from '../constants/Game'

function getDefaultState() {
  return {
    typedDigits: [],
    opponentDigits: []
  }
}

const scores = (state = getDefaultState(), action) => {
  switch (action.type) {
    case SAVE_DIGITS:
      if (action.turn === SCORE_TURN) {
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

export default scores
