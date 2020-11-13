import { ADD_LIST } from "../actions/types";
import { AddListAction } from "../actions/list";

export interface ListState {
  lists: { title: string; list: string[] }[];
}

const initialState: ListState = {
  lists: [
    { title: "To do", list: ["doing", "test", "post", "hello"] },
    { title: "Doing", list: ["wowwowo", "doing"] },
    { title: "Complete", list: ["pratice", "what", "comp"] },
  ],
};

type ListReducerActions = AddListAction;
export default (state = initialState, action: ListReducerActions) => {
  switch (action.type) {
    case ADD_LIST:
      return state;
    default:
      return state;
  }
};
