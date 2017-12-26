function zip(arrays) {
  return arrays[0].map((_, i) => arrays.map(array => array[i]))
}

const scoreCalc = (guess, secret) => {
  let bulls = 0
  let cows = 0

  for (let [g, c] of zip([guess, secret])) {
    if (g === c) {
      bulls += 1
    } else if (secret.includes(g)) {
      cows += 1
    }
  }

  return [bulls, cows]
}

export default scoreCalc
