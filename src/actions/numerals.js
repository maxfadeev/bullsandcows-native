import {
  PRESS_NUMERIC_BUTTON,
  DISCARD_TYPED_DIGIT,
  TOGGLE_NUMERIC_BUTTONS_VISIBILITY,
  SHOW_NUMERIC_BUTTONS,
  PRESS_ROUND_BUTTON,
  GIVE_DIGITS_TO_BOT,
  SAVE_DIGITS,
  FETCH_DIGITS
} from '../constants/ActionTypes'

import { calculateChoices, getGuess } from '../api/bot'

export const pressNumericButton = (numeral, turn) => {
  return {
    type: PRESS_NUMERIC_BUTTON,
    numeral,
    turn
  }
}

export const discardDigit = (numeral, key) => {
  return {
    type: DISCARD_TYPED_DIGIT,
    numeral,
    key
  }
}

export const toggleNumericButtonsVisibility = () => {
  return {
    type: TOGGLE_NUMERIC_BUTTONS_VISIBILITY
  }
}

function fetchDigits() {
  return {
    type: FETCH_DIGITS
  }
}

function saveDigits(typedDigits, opponentDigits, turn) {
  return {
    type: SAVE_DIGITS,
    typedDigits,
    opponentDigits,
    turn
  }
}

function giveDigitsToBot(typedDigits, turn) {
  return {
    type: GIVE_DIGITS_TO_BOT,
    typedDigits,
    turn
  }
}

export const pressRoundButton = () => {
  return (dispatch, getState) => {
    const { turn, typedDigits, againstBot, bot } = getState()
    let opponentDigits = []

    if (againstBot === true) {
      opponentDigits = bot.digits
    }
    Promise.resolve(dispatch(saveDigits(typedDigits, opponentDigits, turn)))
      .then(() => dispatch(toggleNumericButtonsVisibility()))
      .then(() => dispatch(giveDigitsToBot(typedDigits, turn)))
  }
}
