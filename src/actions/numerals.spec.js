import * as actions from './numerals'
import * as types from '../constants/ActionTypes'
import * as gameConstants from '../constants/Game'

describe('numerals actions', () => {
  it('should create an action to press a numeric button', () => {
    const numeral = 3
    const turn = gameConstants.GUESS_TURN
    const expectedAction = {
      type: types.PRESS_NUMERIC_BUTTON,
      numeral,
      turn
    }
    expect(actions.pressNumericButton(numeral, turn)).toEqual(expectedAction)
  })

  it('should create an action to discard a digit', () => {
    const numeral = 3
    const key = 4
    const expectedAction = {
      type: types.DISCARD_TYPED_DIGIT,
      numeral,
      key
    }
    expect(actions.discardDigit(numeral, key)).toEqual(expectedAction)
  })

  it('should create an action to toggle numeric buttons visibility', () => {
    const expectedAction = {
      type: types.TOGGLE_NUMERIC_BUTTONS_VISIBILITY
    }
    expect(actions.toggleNumericButtonsVisibility()).toEqual(expectedAction)
  })
})
