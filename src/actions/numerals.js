import {
  PRESS_NUMERIC_BUTTON,
  DISCARD_TYPED_DIGIT,
  TOGGLE_ROUND_BUTTON_SPRING,
  FETCH_DIGITS_SUCCESS
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

function fetchDigitsSuccess(typedDigits, fetchedDigits, turn) {
  return {
    type: FETCH_DIGITS_SUCCESS,
    typedDigits,
    fetchedDigits,
    turn
  }
}

function fetchDigitsFailure(ex) {
  return {
    type: FETCH_DIGITS_FAILURE,
    ex
  }
}

export const pressRoundButton = () => {
  return (dispatch, getState) => {
    const { turn, typedDigits, againstBot, bot } = getState()

    return fetchDigits(againstBot ? bot : undefined)
      .then(fetchedDigits =>
        dispatch(fetchDigitsSuccess(typedDigits, fetchedDigits, turn))
      )
      .then(() => dispatch(toggleRoundButtonSpring()))
      .catch(ex => dispatch(fetchDigitsFailure(ex)))
  }
}
