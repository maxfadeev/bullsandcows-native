import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const NumericButton = ({ children }) => (
  <TouchableOpacity onPress={() => {}}>
    <Text style={styles}>{children}</Text>
  </TouchableOpacity>
)

const styles = {
  fontSize: 40,
  fontWeight: 'bold'
}

export default NumericButton
