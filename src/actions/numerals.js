import {
  PRESS_NUMERIC_BUTTON,
  DISCARD_TYPED_DIGIT,
  TOGGLE_ROUND_BUTTON_SPRING,
  FETCH_DIGITS_SUCCESS
} from '../constants/ActionTypes'

import { GUESS_TURN, SCORE_TURN } from '../constants/Game'

import simpleBot from '../bot'

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

function fetchBotDigits(typedDigits, turn) {
  if (turn === GUESS_TURN) {
    const guess = [...simpleBot.lastGuess]
    // In order not to keep opponent's digits inside the bot object,
    // score calculation(not heavy) is called before returning the guess
    simpleBot.score(typedDigits)

    return Promise.resolve(guess)
  }

  if (turn === SCORE_TURN) {
    const score = [...simpleBot.lastScore]
    // Same reason for calling the guess calculation
    // (see explanation above for the guess turn)
    simpleBot.guess(typedDigits)

    return Promise.resolve(score)
  }
}

function fetchDigitsRequest(typedDigits, turn, againstBot = false) {
  if (againstBot) {
    return fetchBotDigits(typedDigits, turn)
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

function fetchDigits() {
  return async (dispatch, getState) => {
    const { turn, typedDigits, againstBot } = getState()

    try {
      const fetchedDigits = await fetchDigitsRequest(
        typedDigits,
        turn,
        againstBot
      )
      dispatch(fetchDigitsSuccess(typedDigits, fetchedDigits, turn))
    } catch (e) {
      dispatch(fetchDigitsFailure(e))
    }
  }
}

export const pressRoundButton = () => {
  return async dispatch => {
    await dispatch(fetchDigits())
    return dispatch(toggleRoundButtonSpring())
  }
}
