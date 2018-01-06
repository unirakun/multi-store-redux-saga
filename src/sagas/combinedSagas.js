import { fork, all } from 'redux-saga/effects'
import root from './intents'
import cities from '../screens/cities/sagas/intents'
import contacts from '../screens/contacts/sagas/intents'

const sagas = [
  root,
  cities,
  contacts,
]

export default all(sagas.map(saga => fork(saga)))
