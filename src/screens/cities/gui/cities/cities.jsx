import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForPropTypes } from 'recompose'
import Common from 'components/common'
import City from '../city'

const Cities = ({ cities }) => {
  return (
    <div>
      <Common />
      {cities.map(c => <City id={c} key={c} />)}
    </div>
  )
}

Cities.propTypes = {
  cities: PropTypes.array,
}

Cities.defaultProps = {
  cities: [],
}

export default onlyUpdateForPropTypes(Cities)
