import React from "react";

const NoteListing = (props: any) => {
  const note = props.note;

  const timeAgo = (dateString: string) => {
    const oneDayInMilliseconds = 86400000;
    const daysAgo =
      (new Date().valueOf() - new Date(dateString).valueOf()) /
      oneDayInMilliseconds;
    const rounded = Math.floor(daysAgo);

    if (rounded >= 365) {
      const years = Math.floor(rounded / 365);
      const modifier = years > 1 ? "S" : "";
      return `${years} YEAR${modifier} AGO`;
    }

    if (rounded > 1) return `${rounded} DAYS AGO`;

    return rounded === 1 ? "YESTERDAY" : "TODAY";
  };

  return (
    <div key={note.id} className="note">
      <div className="note__time-ago">
        <span>{timeAgo(note.created_at)}</span>
      </div>
      <div className="note__body-container">
        <div className="note__title">
          <a href={note.url}>{note.title}</a>
        </div>
        <div className="note__url">
          <a href={note.url}>{note.url}</a>
        </div>
        <div className="note__description">
          {/* <span>{note.description}</span> */}
          <span dangerouslySetInnerHTML={{ __html: note.description }}></span>
        </div>
        <div className="note__by">
          <span>by jacob, </span>
          {/* <span>{note.created_by} </span> */}
          <span>updated {timeAgo(note.updated_at).toLowerCase()}</span>
        </div>
        <div className="note__tags">
          <ul>
            {note.tags.map((tag: string) => (
              <li>
                <a href={`#${tag}`}>{tag}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NoteListing;
