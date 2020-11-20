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

export type ListType = { title: string; cards: string[] }[];
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
  newBoardId: 2,
  starCount: 1,
  boards: [
    {
      id: 1,
      star: true,
      boardName: "first board",
      lists: [
        { title: "To do", cards: ["doing", "test a game", "post", "hello"] },
        {
          title: "Doing",
          cards: ["go to school", "watch"],
        },
        { title: "Complete", cards: ["pratice", "finish", "complete"] },
      ],
    },
    {
      id: 2,
      star: false,
      boardName: "second board",
      lists: [
        { title: "To do", cards: ["wow", "my second board", "front"] },
        {
          title: "Doing",
          cards: ["buy coffee", "movie", "go to park", "learn math"],
        },
        { title: "Complete", cards: ["go to the gym", "computer"] },
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
            { title: "To do", cards: [] },
            {
              title: "Doing",
              cards: [],
            },
            { title: "Complete", cards: [] },
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
            { title: action.title, cards: [] },
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
            title: action.title,
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
            action.card,
          ];
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
          newBoard[i].lists[action.listIndex].cards[action.index] =
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
      return { ...state, boards: [...newBoard] };
    }
    default:
      return state;
  }
};

export default BoardReducer;
