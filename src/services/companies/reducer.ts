import { Actions, ActionTypes } from './types';

const defaultState = {}

function companies(state = defaultState, action: Actions) {
  switch (action.type) {
    case ActionTypes.GetList:
      return {
        ...state
      }
    default:
      return state
  }
}

export default companies
