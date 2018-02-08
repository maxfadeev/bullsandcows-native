import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.navigate('Game')}>
      <Text style={styles.menuFont}>Play</Text>
    </TouchableOpacity>
  </View>
)

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
