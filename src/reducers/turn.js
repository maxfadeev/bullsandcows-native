import { GUESS_TURN, SCORE_TURN } from '../constants/Game'
import { SAVE_DIGITS } from '../constants/ActionTypes'

const turn = (state = GUESS_TURN, action) => {
  switch (action.type) {
    case SAVE_DIGITS:
      return state === GUESS_TURN ? SCORE_TURN : GUESS_TURN
    default:
      return state
  }
}

export default turn
