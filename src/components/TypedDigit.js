import React from 'react'
import { TouchableOpacity, Text, StyleSheet, Animated } from 'react-native'

export default class TypedDigit extends React.Component {
  animate() {}

  shouldComponentUpdate(nextProps) {
    return nextProps.children !== this.props.children
  }

  render() {
    return (
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => {
          this.animate()
          this.props.onPress()
        }}
      >
        <Animated.Text style={styles.text}>{this.props.children}</Animated.Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    textAlign: 'center',
    fontFamily: 'VollkornSC-Regular',
    flex: 1
  }
})
