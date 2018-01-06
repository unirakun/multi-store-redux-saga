import { connect } from 'react-redux'
import { compose } from 'recompose'
import loader from 'hoc-react-loader'
import Component from './contacts'
import { authorizations } from './redux'

const mapStateToProps = (state) => {
  return {
    authorizations: authorizations.get()(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    load: () => dispatch({ type: '@@ui/MOUNTED' }),
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  loader(),
)(Component)
