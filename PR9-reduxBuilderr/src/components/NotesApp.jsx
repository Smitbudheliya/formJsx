import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Note from './Note';
import { addNote, setSearch } from '../redux/actions';

const NotesApp = () => {
  const dispatch = useDispatch();
  const { notesList, search } = useSelector(state => state);
  const [text, setText] = useState('');
  const [bg, setBg] = useState('#000000');

  const handleAddNote = () => {
    dispatch(addNote({ text, bg }));
    setText('');
  };

  const filteredNotes = notesList.filter(note =>
    note.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="note_edit">
      <input
        type="text"
        className="search form-control mb-2"
        placeholder="Search notes"
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />

      <div className="creator mb-3">
        <textarea
          className="form-control mb-2 "
          value={text}
          placeholder="Write something..."
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="color"
          className="form-control-color  
          mb-2 p-0"
          value={bg}
          onChange={(e) => setBg(e.target.value)}
        />
        <button
          className="btn btn-primary d-flex"
          disabled={!text.length}
          onClick={handleAddNote}
        >
          Add Note
        </button>
      </div>

      <ul className="list-unstyled d-flex flex-wrap justify-content-center">
        {filteredNotes.map((note, index) => (
          <Note key={index} text={note.text} bg={note.bg} />
        ))}
      </ul>
    </div>
  );
};

export default NotesApp;
