import React from 'react'
import PropTypes from 'prop-types'
import Contacts from './gui/contacts'

const App = ({ authorizations }) => (
  <div>
    <h2>Component</h2>
    <Contacts />
    <h3>Prouf that habilitations are here</h3>
    {JSON.stringify(authorizations, null, 2)}
  </div>
)

App.propTypes = {
  authorizations: PropTypes.object,
}

App.defaultProps = {
  authorizations: { nothing: 'yet' },
}

export default App
