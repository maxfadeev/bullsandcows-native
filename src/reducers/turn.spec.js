import reducer from './turn'

import * as ActionTypes from '../constants/ActionTypes'
import { GUESS_TURN, SCORE_TURN } from '../constants/Game'

describe('turn reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(GUESS_TURN)
  })

  it('should handle FETCH_DIGITS_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: ActionTypes.FETCH_DIGITS_SUCCESS
      })
    ).toEqual(SCORE_TURN)
    expect(
      reducer(SCORE_TURN, {
        type: ActionTypes.FETCH_DIGITS_SUCCESS
      })
    ).toEqual(GUESS_TURN)
  })
})
