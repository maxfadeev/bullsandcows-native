import React, { Component } from 'react'
import { TouchableWithoutFeedback, StyleSheet, Animated } from 'react-native'

export default class NumericButton extends Component {
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

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    textAlign: 'center',
    fontFamily: 'VollkornSC-Bold',
    flex: 1
  }
})
