import React, { Component } from 'react'

import HomeContainer from '../containers/HomeContainer'

export default class HomeScreen extends Component {
  render() {
    return <HomeContainer {...this.props} />
  }
}
