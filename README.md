# Trello

- https://zeroaan.github.io/trello/
- 기간 : 20년 11월 11일 ~ 11월 25일
- 소개 : React, Typescript, Redux를 이용해 Trello를 만들어 보았다.
  <br />

- Redux를 통해 Trello의 Board, List, Card를 모두 관리하였고, Drag & Drop 기능을 구현하여 List 간의 Card 이동이 가능하게 하였다. 또한 css in js를 해보기 위해 material-ui와 styled-components를 사용해 컴포넌트 스타일링을 해보았다.

<br />

### Trello, TrelloBoards

![Trello](./assets/trello.png)

- Trello component는 루트 페이지로 접속시 보이는 첫 페이지이다.
- 현재 가지고 있는 모든 Board들을 볼 수 있으며, 즐겨찾는 Board로 지정해놓은 Starred Boards들도 따로 확인할 수 있다.

```tsx
const { boards } = useSelector<RootState, BoardState>((state: RootState) => state.trello);

const AllBoards = () => {
  return (
    <DivBoard>
      {boards.map((v, i) => (
        <DivBoardLink key={i} to={`/board/${v.id}`}>
          <DivBoardBox>{v.boardName}</DivBoardBox>
        </DivBoardLink>
      ))}
    </DivBoard>
  );
};

const StarBoards = () => {
  return (
    <DivBoard>
      {boards.map((v, i) => {
        if (v.star === true) {
          return (
            <DivBoardLink key={i} to={`/board/${v.id}`}>
              <DivBoardBox>{v.boardName}</DivBoardBox>
            </DivBoardLink>
          );
        } else {
          return null;
        }
      })}
    </DivBoard>
  );
};
```

<br />

### Navbar

- 모든 페이지에서 볼 수 있는 Navbar로 상단에 위치해 있다.
- 좌측에는 현재 Board들을 볼 수 있는 메인페이지로 이동할 수 있는 버튼과 우측에는 새로운 Board를 생성할 수 있는 버튼이 있다.

<br />

### Board

- Trello 컴포넌트에서 하나의 Board를 클릭하면 볼 수 있는 페이지이다.
- trello의 기능인 List와 Card 생성, 수정, 삭제 등 Board 관리를 할 수 있다.

![board](./assets/board.png)

<br />

### BoardCreate

- 새로운 Board를 생성할 수 있다.

![boardCreate](./assets/boardCreate.gif)
<br />

##### components/BoardCreate.tsx

- newBoard Text를 입력후 dispatch를 통해 새로운 board 를 추가해주고, useHistory hook를 이용하여 해당 board 페이지로 이동 시켜주었다.

```tsx
const history = useHistory();
const dispatch = useDispatch();
const { boardId } = useSelector<RootState, BoardState>((state: RootState) => state.trello);

const onClickAddBoard = () => {
  if (newBoard !== "") {
    onClickClose();
    dispatch(addBoard(newBoard));
    history.push(`/board/${boardId}`);
  }
};
```

<br />

##### store/reducers/trello.ts

- reducer에서는 새로운 board에 id, star 여부, boardName 그리고 lists는 기본으로 To do, Doing, Complete list로 만들었다.

```ts
case ADD_BOARD: {
  const newBoard: BoardType[] = [
    ...state.boards,
    {
      id: state.boardId,
      star: false,
      boardName: action.newBoardName,
      lists: [
        { id: `list-${state.listId}`, title: "To do", cards: [] },
        { id: `list-${state.listId + 1}`, title: "Doing", cards: [] },
        { id: `list-${state.listId + 2}`, title: "Complete", cards: [] },
      ],
    },
  ];
  return { ...state, boards: [...newBoard],
    boardId: state.boardId + 1, listId: state.listId + 3 };
}
```

<br />

### BoardDelete

- 현재 Board를 삭제할 수 있다.

![boardDelete](./assets/boardDelete.gif)
<br />

##### components/BoardDelete.tsx

- BoardDelete 컴포넌트에서는 Create 할 때 만든 boardId를 dispatch로 전달해주었고, useHistory hook을 이용하여 삭제 후 메인 페이지로 이동할 수 있게 해주었다.

```tsx
const history = useHistory();
const dispatch = useDispatch();

const onClickDeleteBoard = () => {
  dispatch(deleteBoard(boardId));
  history.push("/");
};
```

<br />

##### store/reducers/trello.ts

- reducer에서는 dispatch로 전달받은 boardId와 store에 있는 id가 같을 때 splice 함수를 통해 해당 Board를 제거해주었다.
- 또한 해당 Board가 starred board 인 경우 starCount도 감소시켜 다른 컴포넌트에 영향이 가지 않도록 해주었다.

```ts
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
```

<br />

### BoardTitle

- 현재 Board의 Title를 변경할 수 있다.

![boardTitle](./assets/boardTitle.gif)
<br />

##### components/BoardTitle.tsx

- Form에서 입력한 boardText와 현재 boardId를 dispatch로 전달해주었다.

```tsx
const dispatch = useDispatch();

const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (boardText !== "") {
    dispatch(changeBoardName(boardText, boardId));
  }
};
```

<br />

##### store/reducers/trello.ts

- 해당 boardId와 store의 id가 같을 경우, 해당 BoardName을 새로운 BoardName으로 변경해주었다.

```ts
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
```

<br />

### BoardStar

- 현재 Board를 즐겨찾는 Board로 설정할 수 있다.

![boardStar](./assets/boardStar.gif)
<br />

##### components/BoardStar.tsx

- 해당 boardId를 전달해준다.

```tsx
const dispatch = useDispatch();

const onClickStar = () => {
  dispatch(starBoard(boardId));
};
```

<br />

##### store/reducer/trello.ts

- 해당 boardId와 store의 id가 같을 경우, star boolean 값을 반대로 설정해주었고, 전체 board의 star 갯수를 count 해주었다.

```ts
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
```

<br />

### List

- 현재 Board에 있는 리스트들을 볼 수 있다. 기본 List로는 To do, Doing, Complete가 있으며 Add a List를 통해 추가할 수 있다.
- 또한 List Title 수정, List Action(Copy, Delete), List Add 등을 할 수 있다.

![list](./assets/list.png)

<br />

### ListTitle

- 해당 List의 Title을 변경할 수 있다.

![listTitle](./assets/listTitle.gif)
<br />

##### components/ListTitle.tsx

- Form에서 입력한 textTitle과 해당 List의 Index 그리고 현재 boardId를 dispatch로 전달해주었다.

```tsx
const dispatch = useDispatch();

const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (textTitle !== "") {
    dispatch(changeListTitle(textTitle, index, boardId));
  }
};
```

<br />

##### store/reducers/trello.ts

- 전달받은 boardId와 store의 board id가 같으면 해당 Board lists의 index 번째 title을 새로운 title로 변경한다.

```ts
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
```

<br />

### ListAction

- 해당 List Action(Add Card, Copy List, Delete List)를 할 수 있다.

![listAction](./assets/listAction.gif)
<br />

##### components/ListAction.tsx

- List Copy는 새로운 List Title과 해당 List의 Index 그리고 현재 BoardId를 전달해준다.
- List Delete는 해당 List의 Index와 현재 BoardId를 전달해준다.

```tsx
const dispatch = useDispatch();

const onClickAddList = () => {
  if (newList !== "") {
    dispatch(copyList(newList, index, boardId));
  }
};
const onClickDeleteList = () => {
  dispatch(deleteList(index, boardId));
};
```

<br />

##### store/reducers/trello.ts

- List Copy는 전달받은 boardId와 store의 board id가 같을 때 해당 board의 index번째 list, card를 복사하고 List를 새로 생성해준다.
- List Delete는 해당 board의 index 번째 List를 제거한다.

```ts
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
      return { ...state, boards: [...newBoard], listId: state.listId + 1, cardId: newCardId };
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
```

<br />

### ListCardAdd

- 새로운 List와 Card 를 추가할 수 있다.
- Add List와 Add Card의 Form이 동일하기 때문에 하나의 컴포넌트로 만들어 주었다.

![listCardAdd](./assets/listCardAdd.gif)
<br />

##### components/ListCardAdd.tsx

- props로 list를 전달받아 true일 경우 addList로 false일 경우 addCard로 dispatch 해주었다.
- List의 경우 Title text와 현재 boardId를 전달해주었고, Card의 경우 card text와 현재 list의 index 그리고 현재 boardId를 전달해주었다.

```tsx
const dispatch = useDispatch();
const inputEl = useRef<HTMLTextAreaElement>(null);

const onClickAddCard = () => {
  if (text !== "") {
    if (list) {
      dispatch(addList(text, boardId));
    } else {
      dispatch(addCard(text, index, boardId));
    }
  }
  if (inputEl.current) {
    inputEl.current.focus();
  }
};
```

<br />

##### store/reducers/trello.ts

- List Add는 해당 Board에서 전달받은 title과 빈 Card를 만들어주었다.
- Card Add는 해당 Board에서 index 번째의 List에 새로운 Card를 만들어주었다.

```ts
case ADD_LIST: {
  const newBoard: BoardType[] = [...state.boards];
  let i = 0;
  while (i < newBoard.length) {
    if (newBoard[i].id === action.boardId) {
      newBoard[i].lists = [
        ...newBoard[i].lists,
        { id: `list-${state.listId}`, title: action.title, cards: [] },
      ];
      break;
    }
    i = i + 1;
  }
  return { ...state, boards: [...newBoard], listId: state.listId + 1 };
}

case ADD_CARD: {
  const newBoard: BoardType[] = [...state.boards];
  let i = 0;
  while (i < newBoard.length) {
    if (newBoard[i].id === action.boardId) {
      newBoard[i].lists[action.index].cards = [
        ...newBoard[i].lists[action.index].cards,
        { id: `card-${state.cardId}`, text: action.card },
      ];
      break;
    }
    i = i + 1;
  }
  return { ...state, boards: [...newBoard], cardId: state.cardId + 1 };
}
```

<br />

### Card

- 해당 List에 있는 Card들을 볼 수 있다.
- Drag & Drop을 통한 Card 이동, Card Content 수정, Card Delete, Card Add를 할 수 있다.

![card](./assets/card.gif)

<br />

### CardContent

- 해당 Card를 Edit, Delete 할 수 있다.

![cardContent](./assets/cardContent.gif)
<br/>

##### components/CardContent.tsx

- Card를 수정할 수 있는 editCard와 삭제할 수 있는 deleteCard를 dispatch 해주었다.
- Card Edit은 새로운 Card text와 현재 Card의 index 현재 List의 index 그리고 현재 boardId를 전달해주었다.
- Card Delete도 마찬가지로 현재 Card의 index 현재 List의 index 그리고 현재 boardId를 전달해주었다.

```tsx
const dispatch = useDispatch();

const onClickSave = () => {
  if (editList !== "") {
    dispatch(editCard(editList, index, listIndex, boardId));
  }
};
const onClickDelete = () => {
  dispatch(deleteCard(index, listIndex, boardId));
};
```

<br />

##### store/reducers/trello.ts

- Card Edit은 해당 Board에서 listIndex번째의 List, 그리고 index번째의 Card의 Text를 새로운 Text로 변경해주었다.
- Card Delete는 Board에서 listIndex번째의 List, 그리고 index번째의 Card를 splice 함수를 통해 제거해주었다.

```ts
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
  return { ...state, boards: [...newBoard] };
}
```
