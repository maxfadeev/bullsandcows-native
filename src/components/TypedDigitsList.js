import React from 'react'
import { FlatList, View } from 'react-native'

import TypedDigit from './TypedDigit'

const TypedDigitsList = ({ typedDigits, onRemoveTypedDigit }) => (
  <FlatList
    style={styles}
    numColumns={4}
    data={typedDigits.map((d, i) => ({ key: i, digit: d }))}
    renderItem={({ item }) => (
      <TypedDigit onPress={() => onRemoveTypedDigit(item.digit, typedDigits)}>
        {item.digit}
      </TypedDigit>
    )}
  />
)

const styles = {
  width: 150
}

export default TypedDigitsList
