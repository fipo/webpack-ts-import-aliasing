import { call, put, takeLatest } from 'redux-saga/effects';
import * as ACTIONS from './actions';
import { ActionTypes } from './types';

import * as api from '~services/api';

export function* handleGetCompaniesList() {
  const response = yield call(api.getCompaniesList);
  yield put(ACTIONS.getCompaniesListReceived(response));
}

export default function* companies() {
  yield takeLatest(ActionTypes.GetCompaniesList, handleGetCompaniesList);
}
