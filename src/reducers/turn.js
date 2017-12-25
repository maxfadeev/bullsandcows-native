import { GUESS_TURN, SCORE_TURN } from '../constants/Game'
import { FETCH_DIGITS_SUCCESS } from '../constants/ActionTypes'

const turn = (state = GUESS_TURN, action) => {
  switch (action.type) {
    case FETCH_DIGITS_SUCCESS:
      return state === GUESS_TURN ? SCORE_TURN : GUESS_TURN
    default:
      return state
  }
}

export default turn
