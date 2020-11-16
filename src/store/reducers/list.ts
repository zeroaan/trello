import { ADD_CARD } from "../actions/types";
import { AddListAction } from "../actions/list";

export interface ListState {
  lists: { title: string; list: string[] }[];
}

const initialState: ListState = {
  lists: [
    { title: "To do", list: ["doing", "test", "post", "hello"] },
    {
      title: "Doing",
      list: ["wowwowo", "doing"],
    },
    { title: "Complete", list: ["pratice", "what", "comp"] },
  ],
};

type ListReducerActions = AddListAction;
const listReducer = (state = initialState, action: ListReducerActions) => {
  switch (action.type) {
    case ADD_CARD: {
      const newLists = [...state.lists];
      let i = 0;
      while (i < state.lists.length) {
        if (state.lists[i].title === action.title) {
          newLists[i].title = state.lists[i].title;
          newLists[i].list = [...state.lists[i].list, action.card];
        }
        i = i + 1;
      }
      return { ...state, lists: [...newLists] };
    }
    default:
      return state;
  }
};

export default listReducer;
