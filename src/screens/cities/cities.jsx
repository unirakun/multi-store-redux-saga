import React from 'react'
import PropTypes from 'prop-types'
import Cities from './gui/cities'

const App = ({ authorizations }) => (
  <div>
    <h2>Component</h2>
    <Cities />
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
