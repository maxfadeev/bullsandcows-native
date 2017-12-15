import reducer from './roundButtonSpring'
import * as types from '../constants/ActionTypes'

describe('roundButtonSpring reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toBe(false)
  })

  it('should handle TOGGLE_ROUND_BUTTON_SPRING', () => {
    expect(
      reducer(false, {
        type: 'TOGGLE_ROUND_BUTTON_SPRING'
      })
    ).toBe(true)
  })
})
