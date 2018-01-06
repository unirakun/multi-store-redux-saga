import { connect } from 'react-redux'
import Component from './header'
import { header } from '../../redux'
import * as router from '../../redux/router'

const mapStateToProps = (state) => {
  return {
    text: header.get()(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToCities: () => dispatch(router.push('/cities')),
    goToContacts: () => dispatch(router.push('/contacts')),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
