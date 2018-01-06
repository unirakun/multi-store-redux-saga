import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForPropTypes } from 'recompose'

const City = ({
  name, zip,
}) => {
  return (
    <div>
      <div>{name}</div>
      <div>{zip}</div>
    </div>
  )
}

City.propTypes = {
  name: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
}

export default onlyUpdateForPropTypes(City)
