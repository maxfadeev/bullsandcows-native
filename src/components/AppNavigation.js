import React from 'react'
import { View } from 'react-native'
import { TabNavigator } from 'react-navigation'

import HomeScreen from './HomeScreen'
import GameScreen from './GameScreen'

const AppNavigation = TabNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Game: {
      screen: GameScreen
    }
  },
  {
    initialRouteName: 'Home',
    cardStyle: {
      backgroundColor: 'white'
    },
    tabBarComponent: () => <View />,
    lazy: true
  }
)

export default AppNavigation
