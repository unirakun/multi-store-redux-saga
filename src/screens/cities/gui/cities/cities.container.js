import { connect } from 'react-redux'
import { cities } from '../../redux/reducers'
import Component from './cities'

export const mapStateToProps = (state) => {
  return {
    cities: cities.getKeys(state),
  }
}

export default connect(mapStateToProps)(Component)
