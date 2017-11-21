import { GUESS_TURN, SCORE_TURN } from '../constants/Game'
import { ADD_GUESS, ADD_SCORE } from '../constants/ActionTypes'

const turn = (state = GUESS_TURN, action) => {
  switch (action.type) {
    case ADD_GUESS:
      return SCORE_TURN
    case ADD_SCORE:
      return GUESS_TURN
    default:
      return state
  }
}

export default turn
