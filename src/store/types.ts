export interface ToDoItem {
  id:number,
  item: string,
  isFinish: boolean
}

export interface ToDoItemState {
  list: ToDoItem[]
}
// action type
export const ADD_ITEM = 'ADD_ITEM'
export const UPDATE_ITEM = 'UPDATE_ITEM'

export interface AddItemAction {
  type: typeof ADD_ITEM,
  payload: ToDoItem
}
export interface UpdateItemAction {
  type: typeof UPDATE_ITEM,
  payload: ToDoItem
}

export type ActionTypes = AddItemAction | UpdateItemAction;