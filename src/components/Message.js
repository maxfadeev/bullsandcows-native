import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { GUESS_TURN } from '../constants/Game'
import ScoreDigitIcon from './ScoreDigitIcon'

const Message = ({ digits, message, turn }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{message}</Text>
    {digits && (
      <View style={styles.digitsContainer}>
        {digits.map((digit, index) => (
          <React.Fragment key={index}>
            <Text style={[styles.text, styles.digit]}>{digit}</Text>
            {turn === GUESS_TURN && <ScoreDigitIcon index={index} />}
          </React.Fragment>
        ))}
      </View>
    )}
  </View>
)

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: 250,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  digitsContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    color: 'green',
    fontSize: 13,
    fontFamily: 'Lora-Regular',
    textAlign: 'center',
    marginRight: 1
  },
  digit: {
    fontFamily: 'VollkornSC-Bold',
    fontSize: 25,
    color: 'black'
  }
})

export default Message
