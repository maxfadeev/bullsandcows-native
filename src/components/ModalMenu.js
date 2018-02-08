import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native'

export default class ModalMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isVisible: props.isVisible
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isVisible !== this.props.isVisible) {
      this.setState({
        isVisible: this.props.isVisible
      })
    }
  }

  render() {
    return (
      <View
        style={[
          styles.container,
          { display: this.state.isVisible ? 'flex' : 'none' }
        ]}
      >
        <TouchableOpacity onPress={() => this.props.toggleModalMenu()}>
          <Text style={styles.menuFont}>Resume</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuFont}>Quit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const modalWidth = 150
const modalHeight = 200

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: '#efefef',
    top: Dimensions.get('window').height / 2 - modalHeight / 2,
    width: modalWidth,
    height: modalHeight,
    shadowColor: 'grey',
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    borderTopWidth: 12,
    borderBottomWidth: 2,
    borderColor: '#d2691e'
  },
  menuFont: {
    fontFamily: 'VollkornSC-Bold',
    fontSize: 18,
    marginBottom: 10
  }
})
