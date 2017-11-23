import React from 'react'
import { FlatList, StyleSheet } from 'react-native'

import NumericButton from './NumericButton'

const NumericButtonsList = ({ numerals, turn, onNumericButtonPress }) => (
  <FlatList
    style={styles.flatList}
    numColumns={5}
    data={numerals.map((n, i) => ({ key: i, numeral: n }))}
    renderItem={({ item }) => (
      <NumericButton onPress={() => onNumericButtonPress(item.numeral, turn)}>
        {item.numeral}
      </NumericButton>
    )}
  />
)

const styles = StyleSheet.create({
  flatList: {
    width: 250
  }
})

export default NumericButtonsList
