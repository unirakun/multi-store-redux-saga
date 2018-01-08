import React from 'react'
import Authorizations from 'components/authorizations'
import Contacts from './gui/contacts'

const App = () => (
  <div style={{ backgroundColor: 'blue', margin: '2em' }}>
    <h2>Component</h2>
    <Contacts />

    <Authorizations />
  </div>
)

export default App
