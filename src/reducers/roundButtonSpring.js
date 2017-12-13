import { TOGGLE_ROUND_BUTTON_SPRING } from '../constants/ActionTypes'

const roundButtonSpring = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_ROUND_BUTTON_SPRING:
      return !state
    default:
      return state
  }
}

export default roundButtonSpring
