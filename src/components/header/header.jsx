import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForPropTypes } from 'recompose'

const Header = ({
  text,
  goToCities, goToContacts,
}) => {
  return (
    <div>
      <button onClick={goToCities}>Cities</button>
      <button onClick={goToContacts}>Contacts</button>
      <div>{text}</div>
    </div>
  )
}

Header.propTypes = {
  text: PropTypes.string,
  goToCities: PropTypes.func,
  goToContacts: PropTypes.func,
}

Header.defaultProps = {
  text: undefined,
  goToContacts: undefined,
  goToCities: undefined,
}

export default onlyUpdateForPropTypes(Header)
