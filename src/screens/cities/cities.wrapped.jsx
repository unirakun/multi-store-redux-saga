import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Cities from './cities.container'

const CitiesWrapper = () => {
  return (
    <Provider store={store}>
      <Cities />
    </Provider>
  )
}

export default CitiesWrapper
