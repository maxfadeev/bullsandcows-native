import { combineReducers } from 'redux'
import turn from './turn'
import typedDigits from './typedDigits'

export default combineReducers({
  turn,
  typedDigits
})
