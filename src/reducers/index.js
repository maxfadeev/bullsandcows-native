import { combineReducers } from 'redux'
import turn from './turn'
import typedDigits from './typedDigits'
import roundButtonSpring from './roundButtonSpring'
import bot from './bot'
import againstBot from './againstBot'
import guesses from './guesses'
import scores from './scores'

export default combineReducers({
  turn,
  typedDigits,
  roundButtonSpring,
  bot,
  againstBot,
  guesses,
  scores
})
