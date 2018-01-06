import { connect } from 'react-redux'
import { contacts } from '../../redux/reducers'
import Component from './contact'

export const mapStateToProps = (state, { id }) => {
  return {
    ...contacts.get(id)(state),
  }
}

export default connect(mapStateToProps)(Component)
