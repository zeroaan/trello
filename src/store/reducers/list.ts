import {
  CHANGE_TITLE,
  ADD_LIST,
  COPY_LIST,
  DELETE_LIST,
  ADD_CARD,
  EDIT_CARD,
  DELETE_CARD,
} from "../actions/types";
import {
  ChangeTitleAction,
  AddListAction,
  CopyListAction,
  DeleteListAction,
  AddCardAction,
  EditCardAction,
  DeleteCardAction,
} from "../actions/list";

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

type ListReducerActions =
  | ChangeTitleAction
  | AddListAction
  | CopyListAction
  | DeleteListAction
  | AddCardAction
  | EditCardAction
  | DeleteCardAction;
const listReducer = (state = initialState, action: ListReducerActions) => {
  switch (action.type) {
    case CHANGE_TITLE: {
      const newLists = [...state.lists];
      newLists[action.index].title = action.newTitle;
      return { ...state, lists: [...newLists] };
    }
    case ADD_LIST: {
      const newLists = [...state.lists, { title: action.title, list: [] }];
      return { ...state, lists: [...newLists] };
    }
    case COPY_LIST: {
      const newLists = [...state.lists];
      newLists.splice(action.index + 1, 0, {
        title: action.title,
        list: [...newLists[action.index].list],
      });
      return { ...state, lists: [...newLists] };
    }
    case DELETE_LIST: {
      const newLists = [...state.lists];
      newLists.splice(action.index, 1);
      return { ...state, lists: [...newLists] };
    }
    case ADD_CARD: {
      const newLists = [...state.lists];
      newLists[action.index].list = [
        ...newLists[action.index].list,
        action.card,
      ];
      return { ...state, lists: [...newLists] };
    }
    case EDIT_CARD: {
      const newLists = [...state.lists];
      newLists[action.listIndex].list[action.index] = action.newCard;
      return { ...state, lists: [...newLists] };
    }
    case DELETE_CARD: {
      const newLists = [...state.lists];
      newLists[action.listIndex].list.splice(action.index, 1);
      return { ...state, lists: [...newLists] };
    }
    default:
      return state;
  }
};

export default listReducer;
