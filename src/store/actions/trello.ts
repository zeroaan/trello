import {
  CHANGE_BOARD_NAME,
  ADD_BOARD,
  STAR_BOARD,
  DELETE_BOARD,
  CHANGE_LIST_TITLE,
  ADD_LIST,
  COPY_LIST,
  DELETE_LIST,
  SORT_LIST,
  ADD_CARD,
  EDIT_CARD,
  DELETE_CARD,
} from "./types";

export interface ChangeBoardNameAction {
  type: typeof CHANGE_BOARD_NAME;
  newBoardName: string;
  boardId: number;
}
export interface AddBoardAction {
  type: typeof ADD_BOARD;
  newBoardName: string;
}
export interface StarBoardAction {
  type: typeof STAR_BOARD;
  boardId: number;
}
export interface DeleteBoardAction {
  type: typeof DELETE_BOARD;
  boardId: number;
}

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

export interface SortListAction {
  type: typeof SORT_LIST;
  boardId: number;
  droppableIdStart: string;
  droppableIdEnd: string;
  droppableIndexStart: number;
  droppableIndexEnd: number;
  draggableId: string;
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

export const changeBoardName = (newBoardName: string, boardId: number) => {
  return {
    type: CHANGE_BOARD_NAME,
    newBoardName,
    boardId,
  };
};
export const addBoard = (newBoardName: string) => {
  return {
    type: ADD_BOARD,
    newBoardName,
  };
};
export const starBoard = (boardId: number) => {
  return {
    type: STAR_BOARD,
    boardId,
  };
};
export const deleteBoard = (boardId: number) => {
  return {
    type: DELETE_BOARD,
    boardId,
  };
};

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

export const sortList = (
  boardId: number,
  droppableIdStart: string,
  droppableIdEnd: string,
  droppableIndexStart: number,
  droppableIndexEnd: number,
  draggableId: string
) => {
  return {
    type: SORT_LIST,
    boardId,
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
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
