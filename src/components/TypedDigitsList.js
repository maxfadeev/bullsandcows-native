import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'

import TypedDigit from './TypedDigit'
import ScoreDigitIcon from './ScoreDigitIcon'

import { SCORE_TURN } from '../constants/Game'

const TypedDigitsList = ({ typedDigits, turn, onDiscardDigit, ...props }) => (
  <View style={styles.container}>
    {typedDigits.map((digit, index) => (
      <React.Fragment key={index}>
        <TypedDigit onDiscard={() => onDiscardDigit(digit, index)} {...props}>
          {digit}
        </TypedDigit>
        {turn === SCORE_TURN && <ScoreDigitIcon index={index} />}
      </React.Fragment>
    ))}
  </View>
)

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default TypedDigitsList
