import React from 'react'
import {
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
  Animated
} from 'react-native'

export default class NumericButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fontZoom: new Animated.Value(fontSize)
    }
  }

  animate() {
    Animated.sequence([
      Animated.timing(this.state.fontZoom, {
        toValue: fontSize / 1.5,
        duration: 50
      }),
      Animated.timing(this.state.fontZoom, {
        toValue: fontSize,
        duration: 500
      })
    ]).start()
  }

  render() {
    let { fontZoom } = this.state

    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.animate()
          this.props.onPress()
        }}
      >
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
