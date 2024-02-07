import React from "react";
import timeAgo from "../../../utils/timeAgo";
import { Note } from "../../../apis/NoteAPI";
import EditNote from "./EditNote";

interface Props {
  note: Note;
  onSubmit: () => void;
};

const NoteListing = ({ note, onSubmit }: Props) => {
  return (
    <EditNote note={note} onSubmit={onSubmit} />
    // <div key={note.id} className="note">
    //   <div className="note__time-ago">
    //     <span>{timeAgo(note.created_at)}</span>
    //   </div>
    //   <div className="note__body-container">
    //     <div className="note__title">
    //       <a href={note.url}>{note.title}</a>
    //     </div>
    //     <div className="note__url">
    //       <a href={note.url}>{note.url}</a>
    //     </div>
    //     <div className="note__description">
    //       <span>{note.description}</span>
    //     </div>
    //     <div className="note__by">
    //       <span>by Jacob, </span>
    //       {/* <span>{note.created_by} </span> */}
    //       <span>updated {timeAgo(note.updated_at).toLowerCase()}</span>
    //     </div>
    //     <div className="note__tags">
    //       <ul>
    //         {note.tags.map((tag: string) => (
    //           <li>
    //             <a href={`#${tag}`}>{tag}</a>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
};

export default NoteListing;
