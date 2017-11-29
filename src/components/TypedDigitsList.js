import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'

import TypedDigit from './TypedDigit'

const TypedDigitsList = ({ typedDigits, onDiscardDigit }) => (
  <FlatList
    style={styles.flatList}
    numColumns={4}
    data={typedDigits.map((d, i) => ({ key: i, digit: d }))}
    renderItem={({ item }) => (
      <TypedDigit onPress={() => onDiscardDigit(item.digit, item.key)}>
        {item.digit}
      </TypedDigit>
    )}
  />
)

const styles = StyleSheet.create({
  flatList: {
    width: 150
  }
})

export default TypedDigitsList
