import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'

import TypedDigit from './TypedDigit'
import ScoreDigitIcon from './ScoreDigitIcon'

import { SCORE_TURN } from '../constants/Game'

const TypedDigitsList = ({ typedDigits, turn, onDiscardDigit, ...props }) => (
  <FlatList
    contentContainerStyle={styles.container}
    scrollEnabled={false}
    numColumns={4}
    data={typedDigits.map((d, i) => ({ key: i, digit: d }))}
    renderItem={({ item }) => (
      <View style={styles.digitContainer}>
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
  container: {
    height: 180
  },
  digitContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
})

export default TypedDigitsList
