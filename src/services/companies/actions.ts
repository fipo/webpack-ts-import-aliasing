import { ActionTypes } from './types';

export const getCompanies = () => ({
  type: ActionTypes.GetList
})

export const getCompaniesSave = (data: I): IGetCompaniesSaveAction => ({
  type: ActionTypes.GetListSave,
  payload: { data }
})
