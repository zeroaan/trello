import { CHANGE_TITLE, ADD_CARD, EDIT_CARD } from "../actions/types";

export interface ChangeTitleAction {
  type: typeof CHANGE_TITLE;
  title: string;
  newTitle: string;
}

export interface AddCardAction {
  type: typeof ADD_CARD;
  title: string;
  card: string;
}

export interface EditCardAction {
  type: typeof EDIT_CARD;
  title: string;
  card: string;
  newCard: string;
}

export const changeTitle = (title: string, newTitle: string) => {
  return {
    type: CHANGE_TITLE,
    title,
    newTitle,
  };
};

export const addCard = (title: string, card: string) => {
  return {
    type: ADD_CARD,
    title,
    card,
  };
};

export const editCard = (title: string, card: string, newCard: string) => {
  return {
    type: EDIT_CARD,
    title,
    card,
    newCard,
  };
};
