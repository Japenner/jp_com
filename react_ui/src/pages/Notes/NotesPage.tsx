import React, { useEffect, useState } from 'react';
import AnimatedPage from '../../components/AnimatedPage';
import NoteListing from './NoteListing';
import { Note, NoteAPI } from '../../apis/NoteAPI';

const NotesPage = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    NoteAPI.getAll().then((notes: Note[]) => setNotes(notes))
  }, []);

  return (
    <AnimatedPage>
      <div className='note-list'>
        {notes.map((note: Note) => <NoteListing note={note} />)}
      </div>
    </AnimatedPage>
  )
};

export default NotesPage;
