import React from 'react'
import { TouchableWithoutFeedback, StyleSheet, Animated } from 'react-native'
import throttle from 'lodash.throttle'

export default class NumericButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fontZoom: new Animated.Value(fontSize)
    }

    this.onPress = throttle(this.onPress, 400, { trailing: false }).bind(this)
  }

  spring() {
    Animated.stagger(270, [
      Animated.spring(this.state.fontZoom, {
        toValue: fontSize / 1.5,
        speed: 20,
        bounciness: 0
      }),
      Animated.spring(this.state.fontZoom, {
        toValue: fontSize,
        speed: 20,
        bounciness: 0
      })
    ]).start()
  }

  onPress() {
    this.spring()
    this.props.onPress()
  }

  render() {
    let { fontZoom } = this.state

    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <Animated.Text
          style={StyleSheet.flatten([styles.text, { fontSize: fontZoom }])}
        >
          {this.props.children}
        </Animated.Text>
      </TouchableWithoutFeedback>
    )
  }
}

const fontSize = 50

const styles = StyleSheet.create({
  text: {
    fontSize,
    textAlign: 'center',
    fontFamily: 'VollkornSC-Bold',
    flex: 1,
    alignSelf: 'baseline'
  }
})
