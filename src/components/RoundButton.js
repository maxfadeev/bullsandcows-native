import React from 'react'
import {
  TouchableWithoutFeedback,
  Animated,
  StyleSheet,
  Text,
  View,
  Platform,
  NativeModules,
  LayoutAnimation,
  Dimensions
} from 'react-native'

export default class RoundButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      press: new Animated.Value(0),
      top: height / 3
    }
    this.onPress = this.onPress.bind(this)

    if (Platform.OS === 'android') {
      NativeModules.UIManager.setLayoutAnimationEnabledExperimental &&
        NativeModules.UIManager.setLayoutAnimationEnabledExperimental(true)
    }
  }

  componentWillReceiveProps(nextProps) {
    LayoutAnimation.spring()
    if (nextProps.roundButtonSpring === false) {
      this.setState({ top: height / 3 })
    } else {
      this.setState({ top: 30 })
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
      speed: 20,
      bounciness: 10
    }).start(cb)
  }

  pressUp() {
    Animated.spring(this.state.press, {
      toValue: 0,
      speed: 20,
      bounciness: 10
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
      <View style={[styles.view, { top: this.state.top }]}>
        <TouchableWithoutFeedback onPress={this.onPress}>
          <Animated.View style={styles.container}>
            <Animated.View style={styles.shadow} />
            <Animated.View style={[styles.textView, { top: this.state.press }]}>
              <Text style={styles.text}>Turn</Text>
            </Animated.View>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

let { height } = Dimensions.get('window')

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
    bottom: 0,
    left: 0,
    right: 0,
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
    bottom: 0,
    left: 0,
    right: 0,
    width: 100,
    height: 100,
    backgroundColor: '#5c5c5c',
    borderRadius: 100
  },
  view: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: 110,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
