import combinatorics from 'js-combinatorics'

const permutations = (digits, size) => {
  return combinatorics.permutation(digits, size).filter(pm => {
    return pm[0] !== 0
  })
}

export default permutations
