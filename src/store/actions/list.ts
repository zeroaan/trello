import { ADD_CARD } from "../actions/types";

export interface AddListAction {
  type: typeof ADD_CARD;
}

export const addList = () => {
  return {
    type: ADD_CARD,
  };
};
