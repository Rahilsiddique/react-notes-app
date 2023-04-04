import React from "react";
import { MdDeleteForever } from "react-icons/md";

const Note = ({ text, date, id, handleDelete, handleEdit }) => {
  return (
    <div className="Note">
      <span>
        {text}
      </span>
      <div className="note-footer">
        <small>
          {date}
        </small>
        <div>
          <MdDeleteForever
            className="delete"
            size="1.3em"
            onClick={() => handleDelete(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
