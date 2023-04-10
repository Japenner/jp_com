import React, { useEffect, useState } from 'react';
import AnimatedPage from '../../components/AnimatedPage';
import NoteListing from './NoteListing';
import { NoteAPI } from '../../apis/NoteAPI';

const NotesPage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    NoteAPI.getAll().then((notes) => {
      console.log(notes)
      setNotes(notes)
    })
  }, []);

  return (
    <AnimatedPage>
      {notes.map((note) => <NoteListing note={note} />)}
    </AnimatedPage>
  )
};

export default NotesPage;
