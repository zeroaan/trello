# Trello

- https://zeroaan.github.io/trello/
- 기간 : 20년 11월 11일 ~ 11월 25일
- 소개 : React, Typescript, Redux를 이용해 Trello를 만들어 보았다.

<br />

### Trello, TrelloBoards

![Trello](./img/trello.png)

- Trello component는 루트 페이지로 접속시 보이는 페이지이다.
- 모든 Board를 볼 수 있으며, Starred 페이지도 따로 확인할 수 있다.

```tsx
const { boards } = useSelector<RootState, BoardState>(
  (state: RootState) => state.trello
);

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
- 현재 Board들을 볼 수 있는 메인페이지로 이동할 수 있는 버튼과 새 Board를 생성할 수 있는 버튼이 있다.

<br />

### Board

- Trello 메인에서 하나의 Board를 클릭하면 볼 수 있는 페이지이다.
- trello의 기능인 List와 Card 관리가 가능하다.

![board](./img/board.png)
<br />

### BoardCreate

- 새로운 Board를 생성할 수 있다.

![boardCreate](./img/boardCreate.gif)

```tsx
const BoardCreate: React.FC<Props> = ({ setCreateBoard }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { boardId } = useSelector<RootState, BoardState>(
    (state: RootState) => state.trello
  );

  const onClickAddBoard = () => {
    if (newBoard !== "") {
      onClickClose();
      dispatch(addBoard(newBoard));
      history.push(`/board/${boardId}`);
    }
  };

  return (
    <>
      <DivNewBoard>
        <CardNewBoard>
          <H3BoardTitle>New Board</H3BoardTitle>
          <InputNewBoard
            placeholder="Input Board Name ..."
            value={newBoard}
            onChange={onChangeBoard}
            maxLength={15}
            autoFocus
          />
          <ButtonNewBoard onClick={onClickAddBoard}>
            Create a Board
          </ButtonNewBoard>
          <CloseIconNewBoard onClick={onClickClose} />
        </CardNewBoard>
      </DivNewBoard>
    </>
  );
};
```

<br />

### BoardDelete

- 현재 Board를 삭제할 수 있다.

![boardDelete](./img/boardDelete.gif)

```tsx
const BoardDelete: React.FC<Props> = ({ boardId }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [deleteBox, setDeleteBox] = useState(false);

  const onClickDeleteBoard = () => {
    dispatch(deleteBoard(boardId));
    history.push("/");
  };

  const DeleteButton = () => {
    return (
      <>
        <ButtonBoardDelete onClick={() => setDeleteBox(true)}>
          <DeleteIcon style={{ fontSize: "20px", color: "white" }} />
        </ButtonBoardDelete>
      </>
    );
  };
  const DeleteAction = () => {
    return (
      <>
        {DeleteButton()}
        <DivBoardDelete>
          <CardBoardDelete>
            <H3BoardDelete>Delete Board</H3BoardDelete>
            <PBoardDelete>삭제 후 되돌릴 수 없습니다.</PBoardDelete>
            <ButtonBoardDeleteDispatch onClick={onClickDeleteBoard}>
              Delete This Board
            </ButtonBoardDeleteDispatch>
            <CloseIconBoardDelete onClick={() => setDeleteBox(false)} />
          </CardBoardDelete>
        </DivBoardDelete>
      </>
    );
  };

  return deleteBox ? DeleteAction() : DeleteButton();
};
```

<br />

### BoardTitle

- 현재 Board의 Title를 변경할 수 있다.

![boardTitle](./img/boardTitle.gif)

```tsx
const BoardTitle: React.FC<Props> = ({ boardName, boardId }) => {
  const dispatch = useDispatch();
  const [titleInput, setTitleInput] = useState(false);

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onBlurInput();
  };
  const onBlurInput = () => {
    if (boardText !== "") {
      dispatch(changeBoardName(boardText, boardId));
      setTitleInput(false);
    }
  };

  const BoardTitleText = () => {
    return (
      <TypographyBoardTitle variant="h6" onClick={() => setTitleInput(true)}>
        {boardName}
      </TypographyBoardTitle>
    );
  };
  const BoardTitleInput = () => {
    return (
      <FormBoardTitle onSubmit={onSubmitForm}>
        <InputBoardTitle
          value={boardText}
          onChange={onChangeName}
          onBlur={onBlurInput}
          maxLength={15}
          autoFocus
        />
      </FormBoardTitle>
    );
  };

  return titleInput ? BoardTitleInput() : BoardTitleText();
};
```

<br />

### BoardStar

- 현재 Board를 즐겨찾는 Board로 설정할 수 있다.

![boardStar](./img/boardStar.gif)

```tsx
const BoardStarButton: React.FC<Props> = ({ boardStar, boardId }) => {
  const dispatch = useDispatch();
  const onClickStar = () => {
    dispatch(starBoard(boardId));
  };

  const StarColor = boardStar ? "yellow" : "white";

  return (
    <ButtonStar style={{ color: StarColor }} onClick={onClickStar}>
      ☆
    </ButtonStar>
  );
};
```

<br />

### List

<br />

### ListTitle

<br />

### ListAction

<br />

### ListCardAdd

<br />

### Card

<br />

### CardContent
