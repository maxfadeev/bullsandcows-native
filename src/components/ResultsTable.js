import React from 'react'
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  ScrollView,
  Platform
} from 'react-native'

import ScoreDigitIcon from './ScoreDigitIcon'

function isEven(n) {
  return n % 2 === 0
}

const ResultsTable = ({ guesses, scores }) => {
  const scoresItems = [...scores]
  if (guesses.length > scores.length) {
    scoresItems.push([])
  }
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <FlatList
        scrollEnabled={false}
        data={guesses.map((v, i) => ({ key: i, guess: v }))}
        keyExtractor={(guess, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.item,
              { backgroundColor: isEven(item.key) ? '#efefef' : 'white' }
            ]}
          >
            <Text style={styles.text}>{item.guess}</Text>
          </View>
        )}
      />
      <FlatList
        scrollEnabled={false}
        data={scoresItems.map((v, i) => ({ key: i, score: v }))}
        keyExtractor={(score, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.item,
              styles.scoreContainer,
              { backgroundColor: isEven(item.key) ? '#efefef' : 'white' }
            ]}
          >
            {item.score.map((n, k) => (
              <View key={k} style={styles.score}>
                <Text style={styles.text}>{n}</Text>
                <ScoreDigitIcon index={k} />
              </View>
            ))}
          </View>
        )}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    marginTop: 80
  },
  contentContainer: {
    flexGrow: 1,
    flexDirection: 'row'
  },
  item: {
    width: 95,
    height: Platform.OS === 'android' ? 38 : 34,
    flex: 1,
    paddingBottom: Platform.OS === 'android' ? 5 : 0
  },
  text: {
    fontFamily: 'VollkornSC-Bold',
    textAlign: 'center',
    fontSize: 24
  },
  scoreContainer: {
    flexDirection: 'row'
  },
  score: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    width: 40
  }
})

export default ResultsTable
