import { connect } from 'react-redux'
import { cities } from '../../redux/reducers'
import Component from './city'

export const mapStateToProps = (state, { id }) => {
  return {
    ...cities.get(id)(state),
  }
}

export default connect(mapStateToProps)(Component)
