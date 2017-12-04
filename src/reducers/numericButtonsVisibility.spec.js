import reducer from './numericButtonsVisibility'

import * as types from '../constants/ActionTypes'

describe('numericButtons visibility reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(true)
  })

  it('should handle TOGGLE_NUMERIC_BUTTONS_VISIBILITY', () => {
    expect(
      reducer(true, {
        type: types.TOGGLE_NUMERIC_BUTTONS_VISIBILITY
      })
    ).toEqual(false)
  })
})
