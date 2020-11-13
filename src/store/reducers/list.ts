import { ADD_LIST } from "../actions/types";
import { AddListAction } from "../actions/list";

interface InitialState {}

const initialState: InitialState = {};

type ListReducerActions = AddListAction;
export default (state = initialState, action: ListReducerActions) => {
  switch (action.type) {
    case ADD_LIST:
      return state;
    default:
      return state;
  }
};
