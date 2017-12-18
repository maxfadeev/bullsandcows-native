import React from 'react'
import { TouchableWithoutFeedback, StyleSheet, Animated } from 'react-native'

export default class NumericButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      zoom: new Animated.Value(1)
    }

    this.onPress = this.onPress.bind(this)
  }

  spring() {
    Animated.stagger(270, [
      Animated.spring(this.state.zoom, {
        toValue: 0.6,
        speed: 40,
        bounciness: 0,
        useNativeDriver: true
      }),
      Animated.spring(this.state.zoom, {
        toValue: 1,
        speed: 40,
        bounciness: 20,
        useNativeDriver: true
      })
    ]).start()
  }

  onPress() {
    this.spring()
    this.props.onPress()
  }

  render() {
    let { zoom } = this.state

    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <Animated.Text
          style={[
            styles.text,
            {
              transform: [
                { scale: this.state.zoom },
                {
                  translateY: this.state.zoom.interpolate({
                    inputRange: [0, 1],
                    outputRange: [25, 0]
                  })
                }
              ]
            }
          ]}
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
    fontSize: 50,
    textAlign: 'center',
    fontFamily: 'VollkornSC-Bold',
    flex: 1,
    alignSelf: 'baseline'
  }
})
