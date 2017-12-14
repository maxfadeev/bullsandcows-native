import { FETCH_DIGITS_SUCCESS } from '../constants/ActionTypes'
import { GUESS_TURN, SCORE_TURN } from '../constants/Game'

import { createSecret, calculateChoices, getGuess } from '../api/bot'
import scoreCalc from '../api/scoreCalc'

function getDefaultState() {
  const choices = calculateChoices()
  return {
    choices,
    secret: createSecret(),
    digits: getGuess(choices)
  }
}

const bot = (state = getDefaultState(), action) => {
  switch (action.type) {
    case FETCH_DIGITS_SUCCESS:
      if (action.turn === GUESS_TURN) {
        const score = scoreCalc(action.typedDigits, state.secret)
        return {
          ...state,
          digits: score
        }
      }
      if (action.turn === SCORE_TURN) {
        const choices = calculateChoices(
          state.choices,
          getGuess(state.choices),
          action.typedDigits
        )
        return {
          ...state,
          choices,
          digits: getGuess(choices)
        }
      }
      return state
    default:
      return state
  }
}

export default bot
