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

function fetchDigits(bot) {
  if (bot !== undefined) {
    return Promise.resolve(bot.digits)
  }
  return Promise.resolve()
}

function saveDigits(typedDigits, fetchedDigits, turn) {
  return {
    type: SAVE_DIGITS,
    typedDigits,
    fetchedDigits,
    turn
  }
}

export const pressRoundButton = () => {
  return (dispatch, getState) => {
    const { turn, typedDigits, againstBot, bot } = getState()

    fetchDigits(againstBot ? bot : undefined)
      .then(fetchedDigits => {
        console.log(fetchedDigits)
        dispatch(saveDigits(typedDigits, fetchedDigits, turn))
      })
      .then(() => dispatch(toggleNumericButtonsVisibility()))
  }
}
