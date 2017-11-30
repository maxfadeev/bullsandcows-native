import {
  PRESS_NUMERIC_BUTTON,
  DISCARD_TYPED_DIGIT,
  ADD_GUESS,
  ADD_SCORE
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
        state.reduce((a, b) => a + b, 0) + numeral > SECRET_LENGTH))
  )
}

const typedDigits = (state = Array(SECRET_LENGTH).fill(SUB), action) => {
  switch (action.type) {
    case PRESS_NUMERIC_BUTTON:
      if (isNumeralAllowable(state, action.numeral, action.turn)) {
        let isEnought = false
        return state.map(numeral => {
          if (!isEnought && numeral === SUB) {
            isEnought = true
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
    default:
      return state
  }
}

export default typedDigits
