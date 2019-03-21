import { all } from 'redux-saga/effects';
import companies from './services/companies/saga';

export default function* sagas() {
  yield all([
    companies(),
  ]);
}
