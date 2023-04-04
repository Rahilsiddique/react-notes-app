import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";

const NoteList = ({ notes, handleAddNote, handleDelete, handleEdit }) => {
  return (
    <div className="note-list">
      {notes.map(note =>
        <Note
          text={note.text}
          date={note.date}
          id={note.id}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      )}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NoteList;
