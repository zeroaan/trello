import React from "react";
import { useRef } from "react";

import Paper from "@material-ui/core/Paper";
import CreateIcon from "@material-ui/icons/Create";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  list: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
    padding: "12px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgb(244,245,247)",
    },
  },
  editIcon: {
    color: "rgb(131,140,145)",
    display: "none",
    padding: "10px",
    position: "absolute",
    top: "4px",
    right: "4px",
    fontSize: "16px",
    borderRadius: "5px",
    "&:hover": {
      color: "black",
      backgroundColor: "rgb(235,236,240)",
    },
  },
}));

interface Props {
  list: string;
}

const ListCard: React.FC<Props> = ({ list }) => {
  const classes = useStyles();

  const editEl = useRef<SVGSVGElement>(null);

  const onMouseOver = () => {
    if (editEl.current) {
      editEl.current.style.display = "block";
    }
  };
  const onMouseOut = () => {
    if (editEl.current) {
      editEl.current.style.display = "none";
    }
  };

  return (
    <>
      <Paper
        className={classes.list}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        <p style={{ maxWidth: "250px", wordBreak: "break-word" }}>{list}</p>
        <CreateIcon ref={editEl} className={classes.editIcon} />
      </Paper>
    </>
  );
};

export default ListCard;
