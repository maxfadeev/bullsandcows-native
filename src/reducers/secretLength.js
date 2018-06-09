import { CHANGE_SECRET_LENGTH } from '../constants/ActionTypes'

const DEFAULT_SECRET_LENGTH = 4

const secretLength = (state = DEFAULT_SECRET_LENGTH, action) => {
  switch (action.type) {
    case CHANGE_SECRET_LENGTH:
      return action.secretLength
    default:
      return state
  }
}

export default secretLength
