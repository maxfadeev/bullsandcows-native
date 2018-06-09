import reducer from './againstBot'

describe('againstBot reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toBe(true)
  })
})
