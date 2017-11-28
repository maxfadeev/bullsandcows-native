import { TOGGLE_NUMERIC_BUTTONS_VISIBILITY } from '../constants/ActionTypes'

const numericButtonsVisibility = (state = true, action) => {
  switch (action.type) {
    case TOGGLE_NUMERIC_BUTTONS_VISIBILITY:
      return !state
    default:
      return state
  }
}

export default numericButtonsVisibility
