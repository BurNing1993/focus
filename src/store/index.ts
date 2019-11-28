// store.js
import { createStore } from 'redux';
import { ToDoItem, ToDoItemState, ADD_ITEM, UPDATE_ITEM, AddItemAction, UpdateItemAction, ActionTypes } from './types'

// Action Creators
export function addItem(item: ToDoItem): AddItemAction {
  return { type: ADD_ITEM, payload: item };
}
export function updateItem(item: ToDoItem): UpdateItemAction {
  return { type: UPDATE_ITEM, payload: item };
}


if (!localStorage.list) {
  localStorage.list = JSON.stringify([])
}

const list = JSON.parse(localStorage.list)
// reducer
const defaultState: ToDoItemState = {
  list: list
}

const reducer = (state = defaultState, action: ActionTypes): ToDoItemState => {
  switch (action.type) {
    case ADD_ITEM:
      {
        const list = [...state.list, action.payload]
        localStorage.list = JSON.stringify(list)
        return {
          list,
        };
      }
    case UPDATE_ITEM:
      {
        const list = [...state.list]
        const { id, isFinish } = action.payload
        const index = list.findIndex(item => item.id === id)
        list[index].isFinish = isFinish
        localStorage.list = JSON.stringify(list)
        return {
          list,
        };
      }
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
