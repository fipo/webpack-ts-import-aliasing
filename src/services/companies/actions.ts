import { ActionTypes, ICompanies } from './types';

export const getCompaniesList = () => ({
  type: ActionTypes.GetCompaniesList,
});

export const getCompaniesListReceived = (response: ICompanies) => ({
  payload: response.companies,
  type: ActionTypes.GetCompaniesListReceived,
});

export const searchCompany = (searchText: string) => ({
  payload: searchText,
  type: ActionTypes.SearchCompany,
});

export const filterList = (filters: string[]) => ({
  payload: filters,
  type: ActionTypes.FilterList,
});
