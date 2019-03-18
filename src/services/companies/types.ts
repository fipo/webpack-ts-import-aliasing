export enum ActionTypes {
  GetList = 'companies/GET_LIST',
  GetListSave = 'companies/GET_LIST_SAVE'
}

export interface GetListAction {
  type: ActionTypes.GetList;
}

export interface IGetCompaniesSaveAction {

}

export type Actions =
  GetListAction
