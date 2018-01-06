import { put, select } from 'redux-saga/effects'
import { contacts } from '../../redux/reducers'

const stubs = [
  {
    id: 1,
    firstname: 'Fabien',
    lastname: 'JUIF',
  },
  {
    id: 2,
    firstname: 'Guillaume',
    lastname: 'CRESPEL',
  },
]

export function* load() {
  console.log('contacts', yield select())
  yield put(contacts.set(stubs))
}
