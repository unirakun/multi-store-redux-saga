import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForPropTypes } from 'recompose'

const Contact = ({
  firstname, lastname,
}) => {
  return (
    <div>
      <div>{firstname}</div>
      <div>{lastname}</div>
    </div>
  )
}

Contact.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
}

export default onlyUpdateForPropTypes(Contact)
