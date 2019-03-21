import { Actions, ActionTypes } from './types';

const defaultState = {
  filters: [],
  list: [],
  search: '',
};

function companies(state = defaultState, action: Actions) {
  switch (action.type) {
    case ActionTypes.GetCompaniesListReceived:
      return {
        ...state,
        list: action.payload,
      };
    case ActionTypes.SearchCompany:
      return {
        ...state,
        search: action.payload,
      };
    case ActionTypes.FilterList:
      return {
        ...state,
        filters: action.payload,
      };
    default:
      return state;
  }
}

export default companies;
