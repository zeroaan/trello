import React from "react";
import { useState, Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { copyList, deleteList } from "store/actions/trello";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";

const DivActionBt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;
const ButtonListAc = styled(Button)`
  width: 179px;
`;
const DivAction = styled.div`
  margin: 20px 15px;
`;
const InputCopy = styled.input`
  font-size: 15px;
  outline: none;
  border: 2px solid rgb(0, 121, 191);
  border-radius: 5px;
  width: 145px;
  height: 12px;
  padding: 10px 10px;
  margin: 8px 0px;
  resize: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ButtonCopyAc = styled.button`
  position: relative;
  left: 48px;
  border-radius: 5px;
  outline: none;
  border: none;
  background-color: rgb(90, 172, 68);
  color: white;
  padding: 6px 13px;
  font-size: 15px;
  cursor: pointer;
`;
const PDelete = styled.p`
  margin: 35px 0 20px 0;
`;
const ButtonDeleteAc = styled.button`
  margin: 0px 47px;
  border-radius: 5px;
  outline: none;
  border: none;
  background-color: rgb(250, 60, 84);
  color: white;
  padding: 6px 16px;
  font-size: 15px;
  cursor: pointer;
`;
const PaperListAc = styled(Paper)`
  z-index: 100;
  position: absolute;
  top: 13px;
  right: -160px;
  width: 200px;
  height: 165px;
  border: 1px solid rgb(218, 219, 226);
`;
const TypographyListAc = styled(Typography)`
  font-family: "Jua", sans-serif;
  position: relative;
  top: 8px;
  text-align: center;
`;
const CloseIconListAc = styled(CloseIcon)`
  position: absolute;
  top: 12px;
  right: 9px;
  font-size: 17px;
  cursor: pointer;
`;
const HrListAc = styled.hr`
  position: relative;
  top: 10px;
  width: 170px;
  margin: auto;
  border: 1px solid rgb(218, 219, 226);
  background-color: rgb(218, 219, 226);
`;

interface Props {
  setActionOpen: Dispatch<SetStateAction<boolean>>;
  index: number;
  boardId: number;
}

const ListAction: React.FC<Props> = ({ setActionOpen, index, boardId }) => {
  const dispatch = useDispatch();

  const [newList, setNewList] = useState("");
  const [copyAction, setCopyAction] = useState(false);
  const [deleteAction, setDeleteAction] = useState(false);

  const onClickListAcClose = () => {
    setActionOpen(false);
  };
  const onClickListAcAddCard = () => {
    onClickListAcClose();
  };
  const onClickListAcCopy = () => {
    setCopyAction(true);
  };
  const onClickListAcDelete = () => {
    setDeleteAction(true);
  };
  const onChangeList = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewList(value);
  };
  const onClickAddList = () => {
    if (newList !== "") {
      onClickListAcClose();
      dispatch(copyList(newList, index, boardId));
      setNewList("");
    }
  };
  const onClickDeleteList = () => {
    onClickListAcClose();
    dispatch(deleteList(index, boardId));
  };

  const ActionHome = () => {
    return (
      <DivActionBt>
        <ButtonListAc onClick={onClickListAcAddCard} disableRipple>
          Add Card
        </ButtonListAc>
        <ButtonListAc onClick={onClickListAcCopy} disableRipple>
          Copy List
        </ButtonListAc>
        <ButtonListAc onClick={onClickListAcDelete} disableRipple>
          Delete This List
        </ButtonListAc>
      </DivActionBt>
    );
  };
  const ListCopy = () => {
    return (
      <DivAction>
        <p>Name</p>
        <InputCopy
          placeholder="Input List title ..."
          value={newList}
          onChange={onChangeList}
          maxLength={15}
          autoFocus
        />
        <ButtonCopyAc onClick={onClickAddList}>Create</ButtonCopyAc>
      </DivAction>
    );
  };
  const ListDelete = () => {
    return (
      <DivAction>
        <PDelete>삭제 후 되돌릴 수 없습니다.</PDelete>
        <ButtonDeleteAc onClick={onClickDeleteList}>Delete</ButtonDeleteAc>
      </DivAction>
    );
  };

  const ActionTitle = copyAction
    ? "Copy List"
    : deleteAction
    ? "Delete List"
    : "List Actions";

  return (
    <>
      <PaperListAc onMouseLeave={onClickListAcClose}>
        <TypographyListAc variant="subtitle1">{ActionTitle}</TypographyListAc>
        <CloseIconListAc onClick={onClickListAcClose} />
        <HrListAc />
        {copyAction ? ListCopy() : deleteAction ? ListDelete() : ActionHome()}
      </PaperListAc>
    </>
  );
};

export default ListAction;
