import React from 'react'
import { TouchableWithoutFeedback, Animated, StyleSheet } from 'react-native'

import { SUB } from '../constants/Game'

export default class TypedDigit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      opacity: new Animated.Value(1)
    }
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.children !== this.props.children
  }

  animate() {
    if (this.props.children !== SUB) {
      Animated.sequence([
        Animated.timing(this.state.opacity, {
          toValue: 0,
          duration: 200
        }),
        Animated.timing(this.state.opacity, {
          toValue: 1,
          duration: 50
        })
      ]).start()
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={() => {
          this.props.disableRoundButton()
          this.animate()
          setTimeout(() => this.props.onPress(), 200)
          setTimeout(() => this.props.enableRoundButton(), 1500)
        }}
      >
        <Animated.Text
          style={StyleSheet.flatten([
            styles.text,
            { opacity: this.state.opacity }
          ])}
        >
          {this.props.children}
        </Animated.Text>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 33,
    textAlign: 'center',
    fontFamily: 'VollkornSC-Regular',
    flex: 1
  }
})
