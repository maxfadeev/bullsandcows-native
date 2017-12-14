import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'

import * as actions from './numerals'
import * as types from '../constants/ActionTypes'
import * as gameConstants from '../constants/Game'

const mockStore = configureMockStore([thunk])

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

  it('should create an action to toggle round button spring', () => {
    const expectedAction = {
      type: types.TOGGLE_ROUND_BUTTON_SPRING
    }
    expect(actions.toggleRoundButtonSpring()).toEqual(expectedAction)
  })

  describe('async pressRoundButton action', () => {
    it('creates FETCH_DIGITS_SUCCESS when "fetching" digits from the bot', () => {
      const fetchedDigits = [4, 5, 6, 7]
      const store = mockStore({
        againstBot: true,
        bot: { digits: fetchedDigits }
      })
      const typedDigits = [1, 2, 3, 4]
      const turn = gameConstants.GUESS_TURN

      const expectedActions = [
        { type: types.FETCH_DIGITS_SUCCESS, typedDigits, fetchedDigits, turn },
        { type: types.TOGGLE_ROUND_BUTTON_SPRING }
      ]

      store.dispatch(actions.pressRoundButton()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
})
