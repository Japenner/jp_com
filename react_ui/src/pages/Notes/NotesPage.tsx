import React, { useEffect, useState } from 'react';
import AnimatedPage from '../../components/AnimatedPage';
import NoteListing from './NoteListing';
import { Note, NoteAPI } from '../../apis/NoteAPI';

const NotesPage = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    NoteAPI.getAll().then((notes: Note[]) => {
      console.log(notes)
      setNotes(notes)
    })
  }, []);

  return (
    <AnimatedPage>
      {notes.map((note: Note) => <NoteListing note={note} />)}
    </AnimatedPage>
  )
};

export default NotesPage;
