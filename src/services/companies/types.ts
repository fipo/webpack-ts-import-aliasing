export enum ActionTypes {
  GetCompaniesList = 'companies/GET_COMPANIES_LIST',
  GetCompaniesListReceived = 'companies/GET_COMPANIES_LIST_RECEIVED',
  SearchCompany = 'companies/SEARCH_COMPANY',
  FilterList = 'companies/FILTER_LIST',
}

export interface ICompany {
  id: number;
  name: string;
  revenue: string;
  address: string;
  city: string;
  url: string;
  email: string;
  phone: string;
  specialty: string;
}

export interface ICompanies {
  companies: ICompany[];
}

export interface IGetListAction {
  type: ActionTypes.GetCompaniesList;
}

export interface IGetCompaniesListReceived {
  type: ActionTypes.GetCompaniesListReceived;
  payload: { data: ICompany[] };
}

export interface ISearchCompanyAction {
  type: ActionTypes.SearchCompany;
  payload: { searchText: string };
}

export interface IFilterListAction {
  type: ActionTypes.FilterList;
  payload: { filter: string };
}

export type Actions =
  IGetListAction |
  IGetCompaniesListReceived |
  ISearchCompanyAction |
  IFilterListAction;
