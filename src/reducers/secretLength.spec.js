import reducer from './secretLength'
import * as ActionTypes from '../constants/ActionTypes'

describe('secretLength reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(4)
  })

  it('should handle CHANGE_SECRET_LENGTH', () => {
    expect(
      reducer(4, {
        type: ActionTypes.CHANGE_SECRET_LENGTH,
        secretLength: 5
      })
    ).toEqual(5)
  })
})
