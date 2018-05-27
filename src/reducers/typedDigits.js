import {
  TYPE_DIGIT,
  DISCARD_TYPED_DIGIT,
  FETCH_DIGITS_SUCCESS
} from '../constants/ActionTypes'
import {
  GUESS_TURN,
  SCORE_TURN,
  SECRET_LENGTH,
  SCORE_LENGTH,
  SUB
} from '../constants/Game'

function isNumeralAllowable(state, numeral, turn) {
  return !(
    (turn === GUESS_TURN &&
      ((state[0] === SUB && numeral === 0) ||
        state.includes(numeral) ||
        !state.includes(SUB))) ||
    (turn === SCORE_TURN &&
      (numeral > SECRET_LENGTH ||
        (state.includes(SUB) &&
          state.reduce((a, b) => (b !== SUB ? a + b : a), 0) + numeral >
            SECRET_LENGTH) ||
        !state.includes(SUB) ||
        (state[0] === SECRET_LENGTH - 1 && numeral !== 0) ||
        state.reduce((a, b) => a + b, 0) + numeral > SECRET_LENGTH))
  )
}

const typedDigits = (state = Array(SECRET_LENGTH).fill(SUB), action) => {
  switch (action.type) {
    case TYPE_DIGIT:
      if (isNumeralAllowable(state, action.numeral, action.turn)) {
        let isEnough = false
        return state.map(numeral => {
          if (!isEnough && numeral === SUB) {
            isEnough = true
            return action.numeral
          }
          return numeral
        })
      }
      return state
    case DISCARD_TYPED_DIGIT:
      return state.map((numeral, key) => {
        if (key === action.key) {
          return SUB
        }
        return numeral
      })
    case FETCH_DIGITS_SUCCESS:
      if (action.turn === GUESS_TURN) {
        return Array(SCORE_LENGTH).fill(SUB)
      }
      if (action.turn === SCORE_TURN) {
        return Array(SECRET_LENGTH).fill(SUB)
      }
    default:
      return state
  }
}

export default typedDigits
