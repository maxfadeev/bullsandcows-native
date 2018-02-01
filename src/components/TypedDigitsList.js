import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'

import TypedDigit from './TypedDigit'
import ScoreDigitIcon from './ScoreDigitIcon'

import { SCORE_TURN } from '../constants/Game'

const TypedDigitsList = ({ typedDigits, turn, onDiscardDigit, ...props }) => (
  <FlatList
    scrollEnabled={false}
    style={styles.flatList}
    numColumns={4}
    data={typedDigits.map((d, i) => ({ key: i, digit: d }))}
    renderItem={({ item }) => (
      <View style={styles.container}>
        <TypedDigit
          onDiscard={() => onDiscardDigit(item.digit, item.key)}
          {...props}
        >
          {item.digit}
        </TypedDigit>
        {turn === SCORE_TURN && <ScoreDigitIcon index={item.key} />}
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
    justifyContent: 'center',
    flexDirection: 'row'
  }
})

export default TypedDigitsList
