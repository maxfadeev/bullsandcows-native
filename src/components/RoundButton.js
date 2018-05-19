import React, { Component } from 'react'
import {
  TouchableWithoutFeedback,
  Animated,
  StyleSheet,
  Text,
  View
} from 'react-native'

import RoundButtonSpinner from './RoundButtonSpinner'
import { WINDOW_HEIGHT, RELAY_BUTTON } from '../constants/Game'

export default class RoundButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      press: new Animated.Value(0),
      translateY: new Animated.Value(WINDOW_HEIGHT / 3),
      isLoading: false
    }
    this.onPress = this.onPress.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.relay !== prevProps.relay) {
      Animated.spring(this.state.translateY, {
        toValue: this.props.relay !== RELAY_BUTTON ? WINDOW_HEIGHT / 3 : 30,
        speed: 25,
        bounciness: 15,
        useNativeDriver: true
      }).start(() => {
        if (this.props.relay !== RELAY_BUTTON) {
          this.setState({ isLoading: false })
        }
      })
    }

    if (!this.state.isLoading) {
      this.pressUp()
    }
  }

  pressDown(cb) {
    Animated.spring(this.state.press, {
      toValue: 4,
      speed: 50,
      bounciness: 20,
      useNativeDriver: true
    }).start(cb)
  }

  pressUp() {
    Animated.spring(this.state.press, {
      toValue: 0,
      speed: 50,
      bounciness: 0,
      useNativeDriver: true
    }).start()
  }

  onPress() {
    const {
      disableRoundButton,
      toggleTypedDigitsLock,
      onRoundButtonPress,
      toggleRelay,
      isDisabled
    } = this.props

    if (!isDisabled) {
      this.setState({ isLoading: true })

      toggleTypedDigitsLock()
      disableRoundButton()
      this.pressDown(() => {
        onRoundButtonPress()
        toggleRelay()
      })
    }
  }

  render() {
    return (
      <Animated.View
        style={[
          styles.view,
          { transform: [{ translateY: this.state.translateY }] }
        ]}
      >
        <TouchableWithoutFeedback onPress={this.onPress}>
          <Animated.View
            style={[
              styles.container,
              {
                transform: [
                  {
                    scale: this.state.press.interpolate({
                      inputRange: [0, 4],
                      outputRange: [1, 0.9]
                    })
                  }
                ]
              }
            ]}
          >
            <Animated.View style={styles.shadow} />
            <Animated.View
              style={[
                styles.textView,
                { transform: [{ translateY: this.state.press }] }
              ]}
            >
              {this.state.isLoading ? (
                <RoundButtonSpinner />
              ) : (
                <Text style={styles.text}>Turn</Text>
              )}
            </Animated.View>
          </Animated.View>
        </TouchableWithoutFeedback>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 110
  },
  text: {
    color: '#efefef',
    textAlign: 'center',
    backgroundColor: '#212121',
    textAlignVertical: 'center',
    fontFamily: 'VollkornSC-Bold',
    fontSize: 16
  },
  textView: {
    position: 'absolute',
    top: 0,
    width: 100,
    height: 100,
    backgroundColor: '#212121',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  shadow: {
    position: 'absolute',
    top: 4,
    width: 100,
    height: 100,
    backgroundColor: '#5c5c5c',
    borderRadius: 100
  },
  view: {
    height: 110,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
