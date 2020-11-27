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
} from "../actions/types";
import {
  ChangeBoardNameAction,
  AddBoardAction,
  StarBoardAction,
  DeleteBoardAction,
  ChangeListTitleAction,
  AddListAction,
  CopyListAction,
  DeleteListAction,
  SortListAction,
  AddCardAction,
  EditCardAction,
  DeleteCardAction,
} from "../actions/trello";

export type CardType = {
  id: string;
  text: string;
}[];
export type ListType = {
  id: string;
  title: string;
  cards: CardType;
}[];
export type BoardType = {
  id: number;
  star: boolean;
  boardName: string;
  lists: ListType;
};

export interface BoardState {
  boardId: number;
  listId: number;
  cardId: number;
  starCount: number;
  boards: BoardType[];
}

const initialState: BoardState = {
  boardId: 2,
  listId: 6,
  cardId: 18,
  starCount: 1,
  boards: [
    {
      id: 0,
      star: true,
      boardName: "first board",
      lists: [
        {
          id: `list-${0}`,
          title: "To do",
          cards: [
            { id: `card-${0}`, text: "doing" },
            { id: `card-${1}`, text: "test a game" },
            { id: `card-${2}`, text: "post" },
            { id: `card-${3}`, text: "hello" },
          ],
        },
        {
          id: `list-${1}`,
          title: "Doing",
          cards: [
            { id: `card-${4}`, text: "go to school" },
            { id: `card-${5}`, text: "watch" },
          ],
        },
        {
          id: `list-${2}`,
          title: "Complete",
          cards: [
            { id: `card-${6}`, text: "pratice" },
            { id: `card-${7}`, text: "finish" },
            { id: `card-${8}`, text: "complete" },
          ],
        },
      ],
    },
    {
      id: 1,
      star: false,
      boardName: "second board",
      lists: [
        {
          id: `list-${3}`,
          title: "To do",
          cards: [
            { id: `card-${9}`, text: "wow" },
            { id: `card-${10}`, text: "my second board" },
            { id: `card-${11}`, text: "front" },
          ],
        },
        {
          id: `list-${4}`,
          title: "Doing",
          cards: [
            { id: `card-${12}`, text: "buy coffee" },
            { id: `card-${13}`, text: "movie" },
            { id: `card-${14}`, text: "go to park" },
            { id: `card-${15}`, text: "learn math" },
          ],
        },
        {
          id: `list-${5}`,
          title: "Complete",
          cards: [
            { id: `card-${16}`, text: "go to the gym" },
            { id: `card-${17}`, text: "computer" },
          ],
        },
      ],
    },
  ],
};

type ListReducerActions =
  | ChangeBoardNameAction
  | AddBoardAction
  | StarBoardAction
  | DeleteBoardAction
  | ChangeListTitleAction
  | AddListAction
  | CopyListAction
  | DeleteListAction
  | SortListAction
  | AddCardAction
  | EditCardAction
  | DeleteCardAction;
const BoardReducer = (state = initialState, action: ListReducerActions) => {
  switch (action.type) {
    case CHANGE_BOARD_NAME: {
      const newBoard: BoardType[] = [...state.boards];
      let i = 0;
      while (i < newBoard.length) {
        if (newBoard[i].id === action.boardId) {
          newBoard[i].boardName = action.newBoardName;
          break;
        }
        i = i + 1;
      }
      return { ...state, boards: [...newBoard] };
    }
    case ADD_BOARD: {
      const newBoard: BoardType[] = [
        ...state.boards,
        {
          id: state.boardId,
          star: false,
          boardName: action.newBoardName,
          lists: [
            { id: `list-${state.listId}`, title: "To do", cards: [] },
            {
              id: `list-${state.listId + 1}`,
              title: "Doing",
              cards: [],
            },
            {
              id: `list-${state.listId + 2}`,
              title: "Complete",
              cards: [],
            },
          ],
        },
      ];
      return {
        ...state,
        boards: [...newBoard],
        boardId: state.boardId + 1,
        listId: state.listId + 3,
      };
    }
    case STAR_BOARD: {
      const newBoard: BoardType[] = [...state.boards];
      let count = 0;
      let i = 0;
      while (i < newBoard.length) {
        if (newBoard[i].id === action.boardId) {
          newBoard[i].star = !newBoard[i].star;
        }
        if (newBoard[i].star === true) {
          count = count + 1;
        }
        i = i + 1;
      }
      return { ...state, boards: [...newBoard], starCount: count };
    }
    case DELETE_BOARD: {
      const newBoard: BoardType[] = [...state.boards];
      let count = state.starCount;
      let i = 0;
      while (i < newBoard.length) {
        if (newBoard[i].id === action.boardId) {
          if (newBoard[i].star === true) {
            count = count - 1;
          }
          newBoard.splice(i, 1);
        }
        i = i + 1;
      }
      return { ...state, boards: [...newBoard], starCount: count };
    }
    case CHANGE_LIST_TITLE: {
      const newBoard: BoardType[] = [...state.boards];
      let i = 0;
      while (i < newBoard.length) {
        if (newBoard[i].id === action.boardId) {
          newBoard[i].lists[action.index].title = action.newTitle;
          break;
        }
        i = i + 1;
      }
      return { ...state, boards: [...newBoard] };
    }
    case ADD_LIST: {
      const newBoard: BoardType[] = [...state.boards];
      let i = 0;
      while (i < newBoard.length) {
        if (newBoard[i].id === action.boardId) {
          newBoard[i].lists = [
            ...newBoard[i].lists,
            {
              id: `list-${state.listId}`,
              title: action.title,
              cards: [],
            },
          ];
          break;
        }
        i = i + 1;
      }
      return { ...state, boards: [...newBoard], listId: state.listId + 1 };
    }
    case COPY_LIST: {
      const newBoard: BoardType[] = [...state.boards];
      let newCardId = state.cardId;
      let i = 0;
      while (i < newBoard.length) {
        if (newBoard[i].id === action.boardId) {
          const newCard = [...newBoard[i].lists[action.index].cards];
          newCardId += newCard.length;
          let j = 0;
          while (j < newCard.length) {
            newCard[j] = { ...newCard[j], id: `card-${state.cardId + j}` };
            j = j + 1;
          }
          newBoard[i].lists.splice(action.index + 1, 0, {
            id: `list-${state.listId}`,
            title: action.title,
            cards: [...newCard],
          });
          break;
        }
        i = i + 1;
      }
      return {
        ...state,
        boards: [...newBoard],
        listId: state.listId + 1,
        cardId: newCardId,
      };
    }
    case DELETE_LIST: {
      const newBoard: BoardType[] = [...state.boards];
      let i = 0;
      while (i < newBoard.length) {
        if (newBoard[i].id === action.boardId) {
          newBoard[i].lists.splice(action.index, 1);
          break;
        }
        i = i + 1;
      }
      return { ...state, boards: [...newBoard] };
    }
    case SORT_LIST: {
      const newBoard: BoardType[] = [...state.boards];
      let i = 0;
      while (i < newBoard.length) {
        if (newBoard[i].id === action.boardId) {
          if (action.droppableIdStart === action.droppableIdEnd) {
            const list = newBoard[i].lists.find((list) => action.droppableIdStart === list.id);
            if (list) {
              const card = list.cards.splice(action.droppableIndexStart, 1);
              list.cards.splice(action.droppableIndexEnd, 0, ...card);
            }
          }
          if (action.droppableIdStart !== action.droppableIdEnd) {
            const listStart = newBoard[i].lists.find((list) => action.droppableIdStart === list.id);
            const listEnd = newBoard[i].lists.find((list) => action.droppableIdEnd === list.id);
            if (listStart && listEnd) {
              const card = listStart.cards.splice(action.droppableIndexStart, 1);
              listEnd.cards.splice(action.droppableIndexEnd, 0, ...card);
            }
          }
          break;
        }
        i = i + 1;
      }
      return { ...state, boards: [...newBoard] };
    }
    case ADD_CARD: {
      const newBoard: BoardType[] = [...state.boards];
      let i = 0;
      while (i < newBoard.length) {
        if (newBoard[i].id === action.boardId) {
          newBoard[i].lists[action.index].cards = [
            ...newBoard[i].lists[action.index].cards,
            {
              id: `card-${state.cardId}`,
              text: action.card,
            },
          ];
          break;
        }
        i = i + 1;
      }
      return { ...state, boards: [...newBoard], cardId: state.cardId + 1 };
    }
    case EDIT_CARD: {
      const newBoard: BoardType[] = [...state.boards];
      let i = 0;
      while (i < newBoard.length) {
        if (newBoard[i].id === action.boardId) {
          newBoard[i].lists[action.listIndex].cards[action.index].text = action.newCard;
          break;
        }
        i = i + 1;
      }
      return { ...state, boards: [...newBoard] };
    }
    case DELETE_CARD: {
      const newBoard: BoardType[] = [...state.boards];
      let i = 0;
      while (i < newBoard.length) {
        if (newBoard[i].id === action.boardId) {
          newBoard[i].lists[action.listIndex].cards.splice(action.index, 1);
          break;
        }
        i = i + 1;
      }
      console.log(newBoard);
      return { ...state, boards: [...newBoard] };
    }
    default:
      return state;
  }
};

export default BoardReducer;
