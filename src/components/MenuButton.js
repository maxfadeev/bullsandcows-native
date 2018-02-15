import React, { Component } from 'react'
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native'

export default class MenuButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.toggleModalMenu()}
        >
          <Image source={require('../assets/icons/menu.png')} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 38,
    paddingLeft: 5,
    paddingTop: 5,
    borderTopWidth: 1
  },
  button: {
    width: 28,
    height: 26
  }
})
