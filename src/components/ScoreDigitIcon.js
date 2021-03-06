import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'

const ScoreDigitIcon = ({ index }) => (
  <View style={styles.container}>
    <View
      style={
        index === 0 ? [styles.icon, styles.green] : [styles.icon, styles.orange]
      }
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    width: 30,
    alignItems: 'center'
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

export default ScoreDigitIcon
