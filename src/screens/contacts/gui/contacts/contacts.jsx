import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForPropTypes } from 'recompose'
import Common from 'components/common'
import Contact from '../contact'

const Contacts = ({ contacts }) => {
  return (
    <div>
      <Common />
      {contacts.map(c => <Contact id={c} key={c} />)}
    </div>
  )
}

Contacts.propTypes = {
  contacts: PropTypes.array,
}

Contacts.defaultProps = {
  contacts: [],
}

export default onlyUpdateForPropTypes(Contacts)
