import React from 'react'

const NoteListing = (props: any) => {
  const note = props.note;

  const timeAgo = (dateString: string) => {
    const oneDayInMilliseconds = 86400000;
    const daysAgo = (new Date().valueOf() - new Date(dateString).valueOf()) / oneDayInMilliseconds;
    const rounded = Math.floor(daysAgo);

    if (rounded > 1) return `${rounded} DAYS AGO`;

    return rounded === 1 ? 'YESTERDAY' : 'TODAY';
  };

  return (
    <div key={note.id} className='flex flex-row mr-4'>
      <div className='flex align-content-start time-ago'>{timeAgo(note.datetime)}</div>
      <div className='ml-2 flex flex-column align-items-start'>
        <div>
          <span><a href={note.url}>{note.title}</a></span>
        </div>
        <div>
          <span><a href={note.url}>{note.url}</a></span>
        </div>
        <div className='flex flex-wrap align-items-start'>
          <span>{note.description}</span>
        </div>
        <div>
          <span>by </span>
          <span>{note.createdBy} </span>
          <span>hours ago</span>
        </div>
        <div>
          {note.tags.map((tag: string) => (
            <a href={tag}>{tag} </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NoteListing;
