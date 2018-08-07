import React, { PureComponent } from 'react'
import { TouchableOpacity, Animated, StyleSheet } from 'react-native'

export default class TypedDigit extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      opacity: new Animated.Value(1)
    }

    this.onPress = this.onPress.bind(this)
  }

  onPress() {
    const { isLocked, disableRoundButton, onDiscard } = this.props
    if (!isLocked) {
      disableRoundButton()
      onDiscard()
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={this.onPress}>
        <Animated.Text style={[styles.text, { opacity: this.state.opacity }]}>
          {this.props.children}
        </Animated.Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 33,
    textAlign: 'center',
    fontFamily: 'VollkornSC-Regular',
    width: 30
  }
})
