import reducer from './turn'

import * as types from '../constants/ActionTypes'
import { GUESS_TURN, SCORE_TURN } from '../constants/Game'

describe('turn reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(GUESS_TURN)
  })

  it('should handle SAVE_DIGITS', () => {
    expect(
      reducer(undefined, {
        type: types.SAVE_DIGITS
      })
    ).toEqual(SCORE_TURN)
    expect(
      reducer(SCORE_TURN, {
        type: types.SAVE_DIGITS
      })
    ).toEqual(GUESS_TURN)
  })
})
