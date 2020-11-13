import { ADD_LIST } from "../actions/types";

export interface AddListAction {
  type: typeof ADD_LIST;
}

export const addList = () => {
  return {
    type: ADD_LIST,
  };
};
