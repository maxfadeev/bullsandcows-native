import {
  PRESS_NUMERIC_BUTTON,
  REMOVE_TYPED_DIGIT,
  HIDE_NUMERIC_BUTTONS,
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

export const hideNumericButtons = () => {
  return {
    type: HIDE_NUMERIC_BUTTONS
  }
}

export const showNumericButtons = () => {
  return {
    type: SHOW_NUMERIC_BUTTONS
  }
}
