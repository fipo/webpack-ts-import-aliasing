import { createSelector } from 'reselect';

const companiesSelector = state => state.companies;

const allCompaniesSelector = createSelector(
  companiesSelector,
  companies => companies.list,
);

const searchCompanySelector = createSelector(
  companiesSelector,
  companies => companies.search,
);

export const getFiltersSelector = createSelector(
  companiesSelector,
  companies => companies.filters,
);

const getFilteredByFiltersList = createSelector(
  allCompaniesSelector,
  getFiltersSelector,
  (companies, filters) => {
    return (filters.length > 0)
      ? companies.filter(company => filters.includes(company.specialty.toLowerCase()))
      : companies;
  },
);

export const getFilteredBySearchList = createSelector(
  getFilteredByFiltersList,
  searchCompanySelector,
  (companies, searchText) => {
    return searchText.length > 0
      ? companies.filter(company => company.name.toLowerCase().includes(searchText))
      : companies;
  },
);

export const getAvailableFiltersSelector = createSelector(
  allCompaniesSelector,
  (items) => {
    const asStrings = items.map(item => item.specialty);
    return Array.from(new Set(asStrings));
  },
);
