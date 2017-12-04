import { combineReducers } from 'redux'
import turn from './turn'
import typedDigits from './typedDigits'
import numericButtonsVisibility from './numericButtonsVisibility'
import bot from './bot'
import againstBot from './againstBot'

export default combineReducers({
  turn,
  typedDigits,
  numericButtonsVisibility,
  bot,
  againstBot
})
