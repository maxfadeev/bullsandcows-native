import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const NumericButton = ({ children }) => (
  <TouchableOpacity style={styles.touchable} onPress={() => {}}>
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
)

const styles = {
  text: {
    fontSize: 50,
    textAlign: 'center',
    fontFamily: 'VollkornSC-Bold'
  },
  touchable: {
    flex: 1
  }
}

export default NumericButton
