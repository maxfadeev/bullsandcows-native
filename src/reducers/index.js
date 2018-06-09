import { combineReducers } from 'redux'
import turn from './turn'
import typedDigits from './typedDigits'
import againstBot from './againstBot'
import guesses from './guesses'
import scores from './scores'
import secretLength from './secretLength'

export default combineReducers({
  turn,
  typedDigits,
  againstBot,
  guesses,
  scores,
  secretLength
})
