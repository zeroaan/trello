import {
  CHANGE_BOARD_NAME,
  ADD_BOARD,
  STAR_BOARD,
  DELETE_BOARD,
  CHANGE_LIST_TITLE,
  ADD_LIST,
  COPY_LIST,
  DELETE_LIST,
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
  AddCardAction,
  EditCardAction,
  DeleteCardAction,
} from "../actions/trello";

export type CardType = {
  id: number;
  text: string;
}[];
export type ListType = {
  id: number;
  title: string;
  newCardId: number;
  cards: CardType;
}[];
export type BoardType = {
  id: number;
  star: boolean;
  boardName: string;
  lists: ListType;
};

export interface BoardState {
  newBoardId: number;
  starCount: number;
  boards: BoardType[];
}

const initialState: BoardState = {
  newBoardId: 1,
  starCount: 1,
  boards: [
    {
      id: 0,
      star: true,
      boardName: "first board",
      lists: [
        {
          id: 0,
          title: "To do",
          newCardId: 4,
          cards: [
            { id: 0, text: "doing" },
            { id: 1, text: "test a game" },
            { id: 2, text: "post" },
            { id: 3, text: "hello" },
          ],
        },
        {
          id: 1,
          title: "Doing",
          newCardId: 2,
          cards: [
            { id: 0, text: "go to school" },
            { id: 1, text: "watch" },
          ],
        },
        {
          id: 2,
          title: "Complete",
          newCardId: 3,
          cards: [
            { id: 0, text: "pratice" },
            { id: 1, text: "finish" },
            { id: 2, text: "complete" },
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
          id: 0,
          title: "To do",
          newCardId: 3,
          cards: [
            { id: 0, text: "wow" },
            { id: 1, text: "my second board" },
            { id: 2, text: "front" },
          ],
        },
        {
          id: 1,
          title: "Doing",
          newCardId: 4,
          cards: [
            { id: 0, text: "buy coffee" },
            { id: 1, text: "movie" },
            { id: 2, text: "go to park" },
            { id: 3, text: "learn math" },
          ],
        },
        {
          id: 2,
          title: "Complete",
          newCardId: 2,
          cards: [
            { id: 0, text: "go to the gym" },
            { id: 1, text: "computer" },
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
          id: state.newBoardId + 1,
          star: false,
          boardName: action.newBoardName,
          lists: [
            { id: 0, title: "To do", newCardId: 0, cards: [] },
            {
              id: 1,
              title: "Doing",
              newCardId: 0,
              cards: [],
            },
            { id: 2, title: "Complete", newCardId: 0, cards: [] },
          ],
        },
      ];
      return {
        ...state,
        boards: [...newBoard],
        newBoardId: state.newBoardId + 1,
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
            { id: 0, title: action.title, newCardId: 0, cards: [] },
          ];
          break;
        }
        i = i + 1;
      }
      return { ...state, boards: [...newBoard] };
    }
    case COPY_LIST: {
      const newBoard: BoardType[] = [...state.boards];
      let i = 0;
      while (i < newBoard.length) {
        if (newBoard[i].id === action.boardId) {
          newBoard[i].lists.splice(action.index + 1, 0, {
            id: 0,
            title: action.title,
            newCardId: newBoard[i].lists[action.index].newCardId,
            cards: [...newBoard[i].lists[action.index].cards],
          });
          break;
        }
        i = i + 1;
      }
      return { ...state, boards: [...newBoard] };
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
    case ADD_CARD: {
      const newBoard: BoardType[] = [...state.boards];
      let i = 0;
      while (i < newBoard.length) {
        if (newBoard[i].id === action.boardId) {
          newBoard[i].lists[action.index].cards = [
            ...newBoard[i].lists[action.index].cards,
            {
              id: newBoard[i].lists[action.index].newCardId,
              text: action.card,
            },
          ];
          newBoard[i].lists[action.index].newCardId += 1;
          break;
        }
        i = i + 1;
      }
      return { ...state, boards: [...newBoard] };
    }
    case EDIT_CARD: {
      const newBoard: BoardType[] = [...state.boards];
      let i = 0;
      while (i < newBoard.length) {
        if (newBoard[i].id === action.boardId) {
          newBoard[i].lists[action.listIndex].cards[action.index].text =
            action.newCard;
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
