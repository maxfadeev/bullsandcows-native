import {
  PRESS_NUMERIC_BUTTON,
  REMOVE_TYPED_DIGIT
} from '../constants/ActionTypes'
import { GUESS_TURN, SCORE_TURN, GUESS_LENGTH, SUB } from '../constants/Game'

export const pressNumericButton = (numeral, typedDigits, turn) => {
  const isDigitAvailable = !(
    (turn === GUESS_TURN &&
      ((typedDigits[0] === SUB && numeral === 0) ||
        typedDigits.includes(numeral) ||
        !typedDigits.includes(SUB))) ||
    (turn === SCORE_TURN &&
      (numeral > GUESS_LENGTH ||
        (typedDigits.includes(SUB) &&
          typedDigits.reduce((a, b) => (b !== SUB ? a + b : a), 0) + numeral >
            GUESS_LENGTH) ||
        !typedDigits.includes(SUB) ||
        typedDigits.reduce((a, b) => a + b, 0) + numeral > GUESS_LENGTH))
  )

  return {
    type: PRESS_NUMERIC_BUTTON,
    numeral,
    isDigitAvailable
  }
}
