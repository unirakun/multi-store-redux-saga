import { connect } from 'react-redux'
import { contacts } from '../../redux/reducers'
import Component from './contacts'

export const mapStateToProps = (state) => {
  return {
    contacts: contacts.getKeys(state),
  }
}

export default connect(mapStateToProps)(Component)
