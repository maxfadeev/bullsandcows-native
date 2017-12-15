import reducer from './scores'
import * as types from '../constants/ActionTypes'

describe('scores reducer', () => {
  const initialState = {
    typedDigits: [],
    fetchedDigits: []
  }

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle FETCH_DIGITS_SUCCESS', () => {
    const typedDigits = [1, 2]
    const fetchedDigits = [0, 0]
    expect(
      reducer(initialState, {
        type: types.FETCH_DIGITS_SUCCESS,
        typedDigits,
        fetchedDigits,
        turn: 'SCORE_TURN'
      })
    ).toEqual({
      typedDigits: [typedDigits],
      fetchedDigits: [fetchedDigits]
    })
  })
})
