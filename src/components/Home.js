import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const Home = ({ navigation, onPlayNewGame }) => {
  const { params } = navigation.state
  const isGameStarted = params ? params.isGameStarted : null
  return (
    <View style={styles.container}>
      {isGameStarted && (
        <TouchableOpacity onPress={() => navigation.navigate('Game')}>
          <Text style={styles.menuFont}>Resume</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        onPress={() => {
          onPlayNewGame()
          navigation.navigate('Game')
        }}
      >
        <Text style={styles.menuFont}>New Game</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuFont: {
    fontFamily: 'VollkornSC-Bold',
    fontSize: 19
  }
})

export default Home
