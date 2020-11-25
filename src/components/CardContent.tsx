import React from "react";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { editCard, deleteCard } from "store/actions/trello";

import Paper from "@material-ui/core/Paper";
import CreateIcon from "@material-ui/icons/Create";
import CloseIcon from "@material-ui/icons/Close";

const PaperCardContent = styled(Paper)`
  min-height: 22px;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 12px;
  cursor: pointer;
  &:hover {
    backgroundcolor: rgb(244, 245, 247);
  }
  &.dragging {
    opacity: 0.4;
  }
  &:hover svg {
    display: block;
  }
`;
const PListText = styled.p`
  max-width: 250px;
  word-break: break-word;
`;
const CreateIconCardContent = styled(CreateIcon)`
  color: rgb(131, 140, 145);
  display: none;
  padding: 10px;
  position: absolute;
  top: 4px;
  right: 4px;
  font-size: 16px;
  border-radius: 5px;
  &:hover {
    color: black;
    background-color: rgb(235, 236, 240);
  }
`;
const DivBlack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1100;
  background-color: rgba(0, 0, 0, 0.5);
`;
const DivEmptyBox = styled.div`
  height: 82px;
`;
const TextareaCardContent = styled.textarea`
  position: absolute;
  top: -12px;
  left: 0;
  font-size: 16px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 252px;
  height: 60px;
  padding: 12px 12px;
  margin-top: 12px;
  resize: none;
  z-index: 1200;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const CloseIconCardContent = styled(CloseIcon)`
  position: absolute;
  top: 93px;
  left: 245px;
  cursor: pointer;
  color: black;
  font-size: 25px;
  z-index: 1200;
`;
const ButtonCardEdit = styled.button`
  position: absolute;
  top: 80px;
  left: 0px;
  outline: none;
  border: none;
  z-index: 1200;
  border-radius: 5px;
  background-color: rgb(90, 172, 68);
  margin-top: 10px;
  color: white;
  padding: 8px 21px;
  font-size: 16px;
  cursor: pointer;
`;
const ButtonCardDelete = styled.button`
  position: absolute;
  top: 80px;
  left: 85px;
  outline: none;
  border: none;
  z-index: 1200;
  border-radius: 5px;
  background-color: rgb(250, 60, 84);
  margin-top: 10px;
  color: white;
  padding: 8px 15px;
  font-size: 16px;
  cursor: pointer;
`;

interface Props {
  edit?: boolean;
  setCardEditBox: Dispatch<SetStateAction<boolean>>;
  list: string;
  index: number;
  listIndex: number;
  boardId: number;
}

const CardContent: React.FC<Props> = ({
  edit,
  setCardEditBox,
  list,
  index,
  listIndex,
  boardId,
}) => {
  const dispatch = useDispatch();

  const [editList, setEditList] = useState(list);

  useEffect(() => {
    setEditList(list);
  }, [list]);

  const onClickEditOpen = () => {
    setCardEditBox(true);
  };
  const onClickEditClose = () => {
    setCardEditBox(false);
  };
  const onChangeEditList = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setEditList(value);
  };
  const onClickSave = () => {
    if (editList !== "") {
      dispatch(editCard(editList, index, listIndex, boardId));
    }
    onClickEditClose();
  };
  const onClickDelete = () => {
    dispatch(deleteCard(index, listIndex, boardId));
    onClickEditClose();
  };

  const ContentCard = () => {
    return (
      <PaperCardContent>
        <PListText>{list}</PListText>
        <CreateIconCardContent onClick={onClickEditOpen} />
      </PaperCardContent>
    );
  };
  const EditCard = () => {
    return (
      <>
        <DivBlack onClick={onClickEditClose}></DivBlack>
        <DivEmptyBox></DivEmptyBox>
        <TextareaCardContent
          placeholder="Input card ..."
          value={editList}
          onChange={onChangeEditList}
          autoFocus
        />
        <CloseIconCardContent onClick={onClickEditClose} />
        <ButtonCardEdit onClick={onClickSave}>Save</ButtonCardEdit>
        <ButtonCardDelete onClick={onClickDelete}>Delete</ButtonCardDelete>
      </>
    );
  };

  return edit ? EditCard() : ContentCard();
};

export default CardContent;
