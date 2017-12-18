import React from 'react'
import {
  TouchableWithoutFeedback,
  Animated,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native'

export default class RoundButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      press: new Animated.Value(0),
      translateY: new Animated.Value(windowHeight / 3)
    }
    this.onPress = this.onPress.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.roundButtonSpring !== this.props.roundButtonSpring) {
      Animated.spring(this.state.translateY, {
        toValue: nextProps.roundButtonSpring === false ? windowHeight / 3 : 30,
        speed: 25,
        bounciness: 15,
        useNativeDriver: true
      }).start()
    }
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.roundButtonSpring !== this.props.roundButtonSpring
  }

  componentDidUpdate() {
    this.pressUp()
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
      onRoundButtonPress
    } = this.props
    if (!this.props.isDisabled) {
      toggleTypedDigitsLock()
      disableRoundButton()
      this.pressDown(() => {
        onRoundButtonPress()
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
              <Text style={styles.text}>Turn</Text>
            </Animated.View>
          </Animated.View>
        </TouchableWithoutFeedback>
      </Animated.View>
    )
  }
}

const windowHeight = Dimensions.get('window').height

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
