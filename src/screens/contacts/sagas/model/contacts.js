import { put, select } from 'redux-saga/effects'
import { contacts } from '../../redux/reducers'

const stubs = [
  {
    id: 1,
    firtname: 'Fabien',
    lastname: 'JUIF',
  },
  {
    id: 2,
    firtname: 'Guillaume',
    lastname: 'CRESPEL',
  },
]

export function* load() {
  console.log('contacts', yield select())
  yield put(contacts.set(stubs))
}
