import reducer from './againstBot'
import * as types from '../constants/ActionTypes'

describe('againstBot reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toBe(true)
  })
})
