import React from 'react'
import { FlatList } from 'react-native'

import NumericButton from './NumericButton'

const NumericButtonsList = ({
  numerals,
  typedDigits,
  turn,
  onNumericButtonPress
}) => (
  <FlatList
    style={styles}
    numColumns={5}
    data={numerals.map((n, i) => ({ key: i, numeral: n }))}
    renderItem={({ item }) => (
      <NumericButton
        onPress={() => onNumericButtonPress(item.numeral, typedDigits, turn)}
      >
        {item.numeral}
      </NumericButton>
    )}
  />
)

const styles = {
  width: 250
}

export default NumericButtonsList
