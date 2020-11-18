import {
  CHANGE_LIST_TITLE,
  ADD_LIST,
  COPY_LIST,
  DELETE_LIST,
  ADD_CARD,
  EDIT_CARD,
  DELETE_CARD,
} from "./types";

export interface ChangeListTitleAction {
  type: typeof CHANGE_LIST_TITLE;
  newTitle: string;
  index: number;
  boardId: number;
}

export interface AddListAction {
  type: typeof ADD_LIST;
  title: string;
  boardId: number;
}

export interface CopyListAction {
  type: typeof COPY_LIST;
  title: string;
  index: number;
  boardId: number;
}

export interface DeleteListAction {
  type: typeof DELETE_LIST;
  index: number;
  boardId: number;
}

export interface AddCardAction {
  type: typeof ADD_CARD;
  card: string;
  index: number;
  boardId: number;
}

export interface EditCardAction {
  type: typeof EDIT_CARD;
  newCard: string;
  index: number;
  listIndex: number;
  boardId: number;
}

export interface DeleteCardAction {
  type: typeof DELETE_CARD;
  index: number;
  listIndex: number;
  boardId: number;
}

export const changeListTitle = (
  newTitle: string,
  index: number,
  boardId: number
) => {
  return {
    type: CHANGE_LIST_TITLE,
    newTitle,
    index,
    boardId,
  };
};

export const addList = (title: string, boardId: number) => {
  return {
    type: ADD_LIST,
    title,
    boardId,
  };
};

export const copyList = (title: string, index: number, boardId: number) => {
  return {
    type: COPY_LIST,
    title,
    index,
    boardId,
  };
};

export const deleteList = (index: number, boardId: number) => {
  return {
    type: DELETE_LIST,
    index,
    boardId,
  };
};

export const addCard = (card: string, index: number, boardId: number) => {
  return {
    type: ADD_CARD,
    card,
    index,
    boardId,
  };
};

export const editCard = (
  newCard: string,
  index: number,
  listIndex: number,
  boardId: number
) => {
  return {
    type: EDIT_CARD,
    newCard,
    index,
    listIndex,
    boardId,
  };
};

export const deleteCard = (
  index: number,
  listIndex: number,
  boardId: number
) => {
  return {
    type: DELETE_CARD,
    index,
    listIndex,
    boardId,
  };
};
