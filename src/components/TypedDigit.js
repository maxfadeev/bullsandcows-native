import React from 'react'
import { TouchableWithoutFeedback, Text, StyleSheet } from 'react-native'
import { Animated } from 'react-native'

export default class TypedDigit extends React.Component {
  animate() {}

  shouldComponentUpdate(nextProps) {
    return nextProps.children !== this.props.children
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.animate()
          this.props.onPress()
        }}
      >
        <Animated.Text style={styles.text}>{this.props.children}</Animated.Text>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    textAlign: 'center',
    fontFamily: 'VollkornSC-Bold',
    flex: 1
  }
})
