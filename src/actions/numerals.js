import {
  PRESS_NUMERIC_BUTTON,
  REMOVE_TYPED_DIGIT,
  TOGGLE_NUMERIC_BUTTONS_VISIBILITY,
  SHOW_NUMERIC_BUTTONS
} from '../constants/ActionTypes'

export const pressNumericButton = (numeral, turn) => {
  return {
    type: PRESS_NUMERIC_BUTTON,
    numeral,
    turn
  }
}

export const discardDigit = (numeral, key) => {
  return {
    type: REMOVE_TYPED_DIGIT,
    numeral,
    key
  }
}

export const toggleNumericButtonsVisibility = () => {
  return {
    type: TOGGLE_NUMERIC_BUTTONS_VISIBILITY
  }
}
