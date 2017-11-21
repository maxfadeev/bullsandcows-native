import React from 'react'
import { TouchableWithoutFeedback, Text } from 'react-native'
import { Animated } from 'react-native'

export default class TypedDigit extends React.Component {
  styles = {
    fontSize: 35,
    textAlign: 'center',
    fontFamily: 'VollkornSC-Bold',
    flex: 1
  }

  animate() {}

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.animate()
          this.props.onPress()
        }}
      >
        <Animated.Text style={this.styles}>{this.props.children}</Animated.Text>
      </TouchableWithoutFeedback>
    )
  }
}
