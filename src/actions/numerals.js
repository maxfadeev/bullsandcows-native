import {
  PRESS_NUMERIC_BUTTON,
  REMOVE_TYPED_DIGIT
} from '../constants/ActionTypes'

export const pressNumericButton = (numeral, turn) => {
  return {
    type: PRESS_NUMERIC_BUTTON,
    numeral,
    turn
  }
}

export const removeTypedDigit = (numeral, key) => {
  return {
    type: REMOVE_TYPED_DIGIT,
    numeral,
    key
  }
}
