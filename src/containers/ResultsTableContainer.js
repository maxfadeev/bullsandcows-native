import { connect } from 'react-redux'

import ResultsTable from '../components/ResultsTable'

const mapStateToProps = ({ guesses, scores }) => {
  return {
    guesses: guesses.typedDigits,
    scores: scores.fetchedDigits
  }
}

export default connect(mapStateToProps)(ResultsTable)
