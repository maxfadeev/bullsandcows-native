import React, { Component } from 'react'
import { FlatList, StyleSheet, View, Animated, Dimensions } from 'react-native'

import NumericButton from './NumericButton'
import { WINDOW_HEIGHT } from '../constants/Game'

export default class NumericButtonsList extends Component {
  constructor() {
    super()
    this.state = {
      translateY: new Animated.Value(20)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.roundButtonSpring !== this.props.roundButtonSpring) {
      Animated.spring(this.state.translateY, {
        toValue: nextProps.roundButtonSpring === true ? WINDOW_HEIGHT / 3 : 30,
        speed: 25,
        bounciness: 15,
        useNativeDriver: true
      }).start()
    }
  }

  render() {
    const { numerals, turn, onNumericButtonPress } = this.props
    return (
      <Animated.View
        style={[
          styles.view,
          { transform: [{ translateY: this.state.translateY }] }
        ]}
      >
        <FlatList
          style={styles.flatList}
          numColumns={5}
          data={numerals.map((n, i) => ({ key: i, numeral: n }))}
          renderItem={({ item }) => (
            <NumericButton
              onPress={() => onNumericButtonPress(item.numeral, turn)}
            >
              {item.numeral}
            </NumericButton>
          )}
        />
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  flatList: {
    width: 250
  },
  view: {
    position: 'absolute',
    alignItems: 'center',
    width: 300
  }
})
