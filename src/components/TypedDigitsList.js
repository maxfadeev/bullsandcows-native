import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'

import TypedDigit from './TypedDigit'
import ScoreDigitIcon from './ScoreDigitIcon'

import { SCORE_TURN } from '../constants/Game'

const TypedDigitsList = ({ typedDigits, turn, onDiscardDigit, ...props }) => (
  <View style={styles.container}>
    <View style={styles.digitsContainer}>
      <FlatList
        scrollEnabled={false}
        numColumns={4}
        data={typedDigits.map((d, i) => ({ key: i, digit: d }))}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
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
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  digitsContainer: {
    width: 128
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default TypedDigitsList
