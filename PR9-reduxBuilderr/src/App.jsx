import React from 'react';
import NotesApp from './components/NotesApp';

export default function App() {
  return (
    <div className="editor">
      <h1 className='text-center p-5 text-bold'>React notes</h1>
      <NotesApp />
    </div>
  );
}
