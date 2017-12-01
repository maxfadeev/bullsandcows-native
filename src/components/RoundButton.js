import React from 'react'
import {
  TouchableWithoutFeedback,
  Animated,
  StyleSheet,
  Text,
  View,
  Platform,
  NativeModules,
  LayoutAnimation
} from 'react-native'

export default class RoundButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      press: new Animated.Value(0),
      top: 200
    }

    if (Platform.OS === 'android') {
      NativeModules.UIManager.setLayoutAnimationEnabledExperimental &&
        NativeModules.UIManager.setLayoutAnimationEnabledExperimental(true)
    }
  }

  componentWillReceiveProps(nextProps) {
    LayoutAnimation.spring()
    if (nextProps.numericButtonsVisibility === true) {
      this.setState({ top: 200 })
    } else {
      this.setState({ top: 30 })
    }
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.numericButtonsVisibility !== this.props.numericButtonsVisibility
    )
  }

  animate() {
    Animated.stagger(100, [
      Animated.spring(this.state.press, {
        toValue: 4,
        speed: 20,
        bounciness: 10
      }),
      Animated.spring(this.state.press, {
        toValue: 0,
        speed: 20,
        bounciness: 10
      })
    ]).start()
  }

  render() {
    return (
      <View style={[styles.view, { top: this.state.top }]}>
        <TouchableWithoutFeedback
          onPress={() => {
            this.animate()
            this.props.onRoundButtonPress()
          }}
        >
          <Animated.View style={styles.container}>
            <Animated.View style={styles.shadow} />
            <Animated.View style={[styles.textView, { top: this.state.press }]}>
              <Text style={styles.text}>Continue</Text>
            </Animated.View>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
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
