import React, { Component } from 'react'
import { Text, View, StyleSheet, Animated, Platform } from 'react-native'

export default class RoundButtonSpinner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dot1: new Animated.Value(1),
      dot2: new Animated.Value(1),
      dot3: new Animated.Value(1)
    }
  }

  componentDidMount() {
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          this.animate(this.state.dot1, 0, 10),
          this.animate(this.state.dot2, 0, 10),
          this.animate(this.state.dot3, 0, 10)
        ]),
        this.animate(this.state.dot1, 1, 500),
        this.animate(this.state.dot2, 1, 500),
        this.animate(this.state.dot3, 1, 500)
      ])
    ).start()
  }

  animate(dot, value, duration) {
    return Animated.timing(dot, {
      toValue: value,
      duration: duration,
      useNativeDriver: true
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.Text style={[styles.dot, { opacity: this.state.dot1 }]}>
          .
        </Animated.Text>
        <Animated.Text style={[styles.dot, { opacity: this.state.dot2 }]}>
          .
        </Animated.Text>
        <Animated.Text style={[styles.dot, { opacity: this.state.dot3 }]}>
          .
        </Animated.Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: Platform.OS === 'android' ? 90 : 80,
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  dot: {
    fontSize: 45,
    color: 'white'
  }
})
