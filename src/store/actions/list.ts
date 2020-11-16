import { ADD_CARD } from "../actions/types";

export interface AddListAction {
  type: typeof ADD_CARD;
  title: string;
  card: string;
}

export const addCard = (title: string, card: string) => {
  return {
    type: ADD_CARD,
    title,
    card,
  };
};
