import React, { Component } from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'

export default class MenuButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => this.props.toggleModalMenu()}
      >
        <Image source={require('../assets/icons/menu.png')} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 40,
    left: 5
  }
})
