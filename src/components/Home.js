import React, { Component } from 'react'
import { View, Button, StyleSheet } from 'react-native'

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Button title="Play" onPress={() => navigation.navigate('Game')} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Home
