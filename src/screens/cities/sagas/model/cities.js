import { put, select } from 'redux-saga/effects'
import { cities } from '../../redux/reducers'

const stubs = [
  {
    id: 1,
    name: 'Nantes',
    zip: '44000',
  },
  {
    id: 2,
    name: 'Orvault',
    zip: '44700',
  },
  {
    id: 3,
    name: 'St Herblain',
    zip: '44800',
  },
]

export function* load() {
  yield put(cities.set(stubs))
}
