import React from 'react'
import Authorizations from 'components/authorizations'
import Cities from './gui/cities'

const App = () => (
  <div style={{ backgroundColor: 'violet', margin: '2em' }}>
    <h2>Component</h2>
    <Cities />

    <Authorizations />
  </div>
)

export default App
