import {
  PRESS_NUMERIC_BUTTON,
  DISCARD_TYPED_DIGIT,
  TOGGLE_ROUND_BUTTON_SPRING,
  SHOW_NUMERIC_BUTTONS,
  PRESS_ROUND_BUTTON,
  GIVE_DIGITS_TO_BOT,
  SAVE_DIGITS,
  FETCH_DIGITS,
  DISABLE_ROUND_BUTTON,
  ENABLE_ROUND_BUTTON
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

export const toggleRoundButtonSpring = () => {
  return {
    type: TOGGLE_ROUND_BUTTON_SPRING
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
      .then(fetchedDigits =>
        dispatch(saveDigits(typedDigits, fetchedDigits, turn))
      )
      .then(() => dispatch(toggleRoundButtonSpring()))
  }
}
