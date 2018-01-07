import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForPropTypes } from 'recompose'

const Common = ({
  text,
}) => {
  return (
    <div>
      <div>reducer : {text}</div>
    </div>
  )
}

Common.propTypes = {
  text: PropTypes.string,
}

Common.defaultProps = {
  text: undefined,
}

export default onlyUpdateForPropTypes(Common)
