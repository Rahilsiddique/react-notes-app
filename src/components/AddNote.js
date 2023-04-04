import React from "react";
import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [newNote, setNewNote] = useState("");
  const wordLimit = 300;

  const handleChange = e => {
    if (wordLimit - e.target.value.length >= 0) {
      setNewNote(e.target.value);
    }
  };
  const handleSave = () => {
    if (newNote.trim().length > 0) {
      handleAddNote(newNote);
      setNewNote("");
    }
  };
  return (
    <div className="Note new-note">
      <textarea
        rows="8"
        cols="10"
        placeholder="Add new Note"
        value={newNote}
        onChange={handleChange}
        className="style-1"
      />
      <div className="note-footer">
        <small>
          {wordLimit - newNote.length} words remaining
        </small>
        <button className="save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
