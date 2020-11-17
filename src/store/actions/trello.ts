import {
  CHANGE_TITLE,
  ADD_LIST,
  COPY_LIST,
  DELETE_LIST,
  ADD_CARD,
  EDIT_CARD,
  DELETE_CARD,
} from "./types";

export interface ChangeTitleAction {
  type: typeof CHANGE_TITLE;
  newTitle: string;
  index: number;
}

export interface AddListAction {
  type: typeof ADD_LIST;
  title: string;
}

export interface CopyListAction {
  type: typeof COPY_LIST;
  title: string;
  index: number;
}

export interface DeleteListAction {
  type: typeof DELETE_LIST;
  index: number;
}

export interface AddCardAction {
  type: typeof ADD_CARD;
  card: string;
  index: number;
}

export interface EditCardAction {
  type: typeof EDIT_CARD;
  newCard: string;
  index: number;
  listIndex: number;
}

export interface DeleteCardAction {
  type: typeof DELETE_CARD;
  index: number;
  listIndex: number;
}

export const changeTitle = (newTitle: string, index: number) => {
  return {
    type: CHANGE_TITLE,
    newTitle,
    index,
  };
};

export const addList = (title: string) => {
  return {
    type: ADD_LIST,
    title,
  };
};

export const copyList = (title: string, index: number) => {
  return {
    type: COPY_LIST,
    title,
    index,
  };
};

export const deleteList = (index: number) => {
  return {
    type: DELETE_LIST,
    index,
  };
};

export const addCard = (card: string, index: number) => {
  return {
    type: ADD_CARD,
    card,
    index,
  };
};

export const editCard = (newCard: string, index: number, listIndex: number) => {
  return {
    type: EDIT_CARD,
    newCard,
    index,
    listIndex,
  };
};

export const deleteCard = (index: number, listIndex: number) => {
  return {
    type: DELETE_CARD,
    index,
    listIndex,
  };
};
