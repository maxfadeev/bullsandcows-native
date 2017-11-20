import React from 'react'
import { TouchableWithoutFeedback, Text } from 'react-native'
import { Animated } from 'react-native'

export default class NumericButton extends React.Component {
  styles = {
    text: {
      fontSize: 50,
      textAlign: 'center',
      fontFamily: 'VollkornSC-Bold',
      flex: 1,
      alignSelf: 'baseline'
    },
    touchable: {}
  }
  state = {
    fontZoom: new Animated.Value(this.styles.text.fontSize)
  }

  animate() {
    Animated.timing(this.state.fontZoom, {
      toValue: this.styles.text.fontSize / 1.5,
      duration: 50
    }).start(() => {
      Animated.timing(this.state.fontZoom, {
        toValue: this.styles.text.fontSize,
        duration: 500
      }).start()
    })
  }

  render() {
    let { fontZoom } = this.state

    return (
      <TouchableWithoutFeedback
        style={this.styles.touchable}
        onPress={() => this.animate()}
      >
        <Animated.Text style={{ ...this.styles.text, fontSize: fontZoom }}>
          {this.props.children}
        </Animated.Text>
      </TouchableWithoutFeedback>
    )
  }
}
