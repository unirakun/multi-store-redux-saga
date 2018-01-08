import { connect } from 'react-redux'
import { compose } from 'recompose'
import loader from 'hoc-react-loader'
import Component from './contacts'

const mapDispatchToProps = (dispatch) => {
  return {
    load: () => dispatch({ type: '@@ui/MOUNTED' }),
  }
}

export default compose(
  connect(undefined, mapDispatchToProps),
  loader(),
)(Component)
