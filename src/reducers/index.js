import { combineReducers } from 'redux'
import turn from './turn'
import typedDigits from './typedDigits'
import numericButtonsVisibility from './numericButtonsVisibility'
import bot from './bot'

export default combineReducers({
  turn,
  typedDigits,
  numericButtonsVisibility,
  bot
})
