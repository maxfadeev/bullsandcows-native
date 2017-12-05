import React from 'react'
import { FlatList, View, StyleSheet, Platform } from 'react-native'

import TypedDigit from './TypedDigit'

import { SCORE_TURN } from '../constants/Game'

const TypedDigitsList = ({ typedDigits, turn, onDiscardDigit }) => (
  <FlatList
    style={styles.flatList}
    numColumns={4}
    data={typedDigits.map((d, i) => ({ key: i, digit: d }))}
    renderItem={({ item }) => (
      <View style={styles.container}>
        <TypedDigit onPress={() => onDiscardDigit(item.digit, item.key)}>
          {item.digit}
        </TypedDigit>
        <View
          style={
            turn === SCORE_TURN
              ? item.key === 0
                ? [styles.icon, styles.green]
                : [styles.icon, styles.orange]
              : {}
          }
        />
      </View>
    )}
  />
)

const styles = StyleSheet.create({
  flatList: {
    width: 128
  },
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row'
  },
  icon: {
    width: 12,
    height: 12,
    borderRadius: 12,
    marginTop: Platform.OS === 'android' ? 10 : 0
  },
  green: {
    backgroundColor: 'green'
  },
  orange: {
    backgroundColor: 'orange'
  }
})

export default TypedDigitsList
