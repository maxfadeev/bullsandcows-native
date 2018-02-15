import React from 'react'
import { View } from 'react-native'

import ResultsTableContainer from '../containers/ResultsTableContainer'

import ModalMenu from './ModalMenu'
import MenuButton from './MenuButton'
import NumeralsControlPanel from './NumeralsControlPanel'

export default class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isModalMenuVisible: false
    }
    this.toggleModalMenu = this.toggleModalMenu.bind(this)
  }

  toggleModalMenu() {
    this.setState(state => ({
      isModalMenuVisible: !state.isModalMenuVisible
    }))
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <MenuButton toggleModalMenu={this.toggleModalMenu} />
        </View>
        <View style={{ flex: 7 }}>
          <ResultsTableContainer />
        </View>
        <NumeralsControlPanel />
        <ModalMenu
          isVisible={this.state.isModalMenuVisible}
          toggleModalMenu={this.toggleModalMenu}
          navigation={navigation}
        />
      </View>
    )
  }
}
