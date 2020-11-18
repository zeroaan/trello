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

type ListType = { title: string; list: string[] }[];
type BoardType = {
  id: number;
  star: boolean;
  boardName: string;
  lists: ListType;
};

export interface BoardState {
  boards: BoardType[];
}

const initialState: BoardState = {
  boards: [
    {
      id: 1,
      star: true,
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
      star: false,
      boardName: "second board",
      lists: [
        { title: "To do", list: ["wow", "my second board", "front"] },
        {
          title: "Doing",
          list: ["buy coffee", "movie", "go to park", "learn math"],
        },
        { title: "Complete", list: ["go to the gym", "computer"] },
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
            { title: action.title, list: [] },
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
            list: [...newBoard[i].lists[action.index].list],
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
          newBoard[i].lists[action.index].list = [
            ...newBoard[i].lists[action.index].list,
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
          newBoard[i].lists[action.listIndex].list[action.index] =
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
          newBoard[i].lists[action.listIndex].list.splice(action.index, 1);
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
