import React from 'react';

function NoteList({ notes, onDeleteNote }) {
  return (
    <div>
      {notes.map(note => (
        <div key={note._id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => onDeleteNote(note._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default NoteList;