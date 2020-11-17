import {
  CHANGE_LIST_TITLE,
  ADD_LIST,
  COPY_LIST,
  DELETE_LIST,
  ADD_CARD,
  EDIT_CARD,
  DELETE_CARD,
} from "../actions/types";
import {
  ChangeListTitleAction,
  AddListAction,
  CopyListAction,
  DeleteListAction,
  AddCardAction,
  EditCardAction,
  DeleteCardAction,
} from "../actions/trello";

export interface BoardState {
  boards: {
    id: number;
    boardName: string;
    lists: { title: string; list: string[] }[];
  }[];
}

const initialState: BoardState = {
  boards: [
    {
      id: 1,
      boardName: "first board",
      lists: [
        { title: "To do", list: ["doing", "test a game", "post", "hello"] },
        {
          title: "Doing",
          list: ["go to school", "watch"],
        },
        { title: "Complete", list: ["pratice", "finish", "complete"] },
      ],
    },
    {
      id: 2,
      boardName: "second board",
      lists: [
        { title: "To do", list: ["doing", "test a game", "post", "hello"] },
        {
          title: "Doing",
          list: ["go to school", "watch"],
        },
        { title: "Complete", list: ["pratice", "finish", "complete"] },
      ],
    },
  ],
};

type ListReducerActions =
  | ChangeListTitleAction
  | AddListAction
  | CopyListAction
  | DeleteListAction
  | AddCardAction
  | EditCardAction
  | DeleteCardAction;
const BoardReducer = (state = initialState, action: ListReducerActions) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default BoardReducer;
