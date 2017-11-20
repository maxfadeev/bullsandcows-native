import {
  PRESS_NUMERIC_BUTTON,
  REMOVE_TYPED_DIGIT,
  ADD_GUESS,
  ADD_SCORE
} from '../constants/ActionTypes'
import { SUB, GUESS_LENGTH, SCORE_LENGTH } from '../constants/Game'

const typedDigits = (state = Array(GUESS_LENGTH).fill(SUB), action) => {
  switch (action.type) {
    case PRESS_NUMERIC_BUTTON:
      if (action.isDigitAvailable) {
        if (state.includes(SUB)) {
          let isEnought = false
          return state.map(numeral => {
            if (numeral === SUB && !isEnought) {
              isEnought = true
              return action.numeral
            }
            return numeral
          })
        }
        return [...state, action.numeral]
      }
      return state
  }
}

export default typedDigits
