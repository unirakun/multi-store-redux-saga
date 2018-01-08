
import { connect } from 'react-redux'
import Component from './authorizations'
import { authorizations } from '../../redux'

const mapStateToProps = (state) => {
  return {
    authorizations: authorizations.get()(state),
  }
}

export default connect(mapStateToProps)(Component)
