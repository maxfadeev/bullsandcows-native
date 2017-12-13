import React from 'react'
import { TouchableWithoutFeedback, Animated, StyleSheet } from 'react-native'
import throttle from 'lodash.throttle'

import { SUB } from '../constants/Game'

export default class TypedDigit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      opacity: new Animated.Value(1)
    }

    this.onPress = throttle(this.onPress, 300, { trailing: false }).bind(this)
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.children !== this.props.children
  }

  fade(cb) {
    if (this.props.children !== SUB) {
      Animated.timing(this.state.opacity, {
        toValue: 0,
        duration: 200
      }).start(cb)
    }
  }

  brighten() {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 20
    }).start()
  }

  onPress() {
    const { isLocked, disableRoundButton, onPress } = this.props
    if (!isLocked) {
      disableRoundButton()
      this.fade(() => {
        onPress()
        this.brighten()
      })
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback style={{ flex: 1 }} onPress={this.onPress}>
        <Animated.Text
          style={StyleSheet.flatten([
            styles.text,
            { opacity: this.state.opacity }
          ])}
        >
          {this.props.children}
        </Animated.Text>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 33,
    textAlign: 'center',
    fontFamily: 'VollkornSC-Regular',
    flex: 1
  }
})
