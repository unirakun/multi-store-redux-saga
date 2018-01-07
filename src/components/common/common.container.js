import { connect } from 'react-redux'
import Component from './common'
import { common } from '../../redux'

const mapStateToProps = (state) => {
  return {
    text: common.get()(state),
  }
}

export default connect(mapStateToProps)(Component)
