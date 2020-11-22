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
  id: string;
  text: string;
}[];
export type ListType = {
  id: string;
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

let listID = 6;
let cardID = 18;

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
          id: `list-${0}`,
          title: "To do",
          newCardId: 4,
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
          newCardId: 2,
          cards: [
            { id: `card-${4}`, text: "go to school" },
            { id: `card-${5}`, text: "watch" },
          ],
        },
        {
          id: `list-${2}`,
          title: "Complete",
          newCardId: 3,
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
          newCardId: 3,
          cards: [
            { id: `card-${9}`, text: "wow" },
            { id: `card-${10}`, text: "my second board" },
            { id: `card-${11}`, text: "front" },
          ],
        },
        {
          id: `list-${4}`,
          title: "Doing",
          newCardId: 4,
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
          newCardId: 2,
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
            { id: `list-${listID}`, title: "To do", newCardId: 0, cards: [] },
            {
              id: `list-${listID + 1}`,
              title: "Doing",
              newCardId: 0,
              cards: [],
            },
            {
              id: `list-${listID + 2}`,
              title: "Complete",
              newCardId: 0,
              cards: [],
            },
          ],
        },
      ];
      listID += 3;
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
            {
              id: `list-${listID}`,
              title: action.title,
              newCardId: 0,
              cards: [],
            },
          ];
          break;
        }
        i = i + 1;
      }
      listID += 1;
      return { ...state, boards: [...newBoard] };
    }
    case COPY_LIST: {
      const newBoard: BoardType[] = [...state.boards];
      let i = 0;
      while (i < newBoard.length) {
        if (newBoard[i].id === action.boardId) {
          newBoard[i].lists.splice(action.index + 1, 0, {
            id: `list-${listID}`,
            title: action.title,
            newCardId: newBoard[i].lists[action.index].newCardId,
            cards: [...newBoard[i].lists[action.index].cards],
          });
          break;
        }
        i = i + 1;
      }
      listID += 1;
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
              id: `card-${cardID}`,
              text: action.card,
            },
          ];
          newBoard[i].lists[action.index].newCardId += 1;
          break;
        }
        i = i + 1;
      }
      cardID += 1;
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
