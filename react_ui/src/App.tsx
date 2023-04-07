import React from 'react';

// Styling imports
import './App.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button'

function App() {
  const colors: any = {
    youtube: 'red',
    twitter: 'blue',
    github: 'black',
  }

  const data = {
    name: 'Jacob Penner',
    image: 'https://github.com/japenner.png',
    bio: "Hi there, my name is Jacob Penner. I'm a full stack developer at Ad Hoc",
    links: [
      {
        name: 'My GitHub',
        url: 'https://github.com/japenner',
        icon: 'github',
      },
      {
        name: 'My LinkedIn',
        url: 'https://www.linkedin.com/in/japenner/',
        icon: 'linkedin',
      },
    ]
  }

  return (
    <div className='m-4'>
      <div className="flex justify-content-center align-items-center">
        <Avatar
          image={data.image}
          size="xlarge"
          shape="circle"
        />
        <h1 className="m-2">{data.name}</h1>
      </div>
      <div className='flex justify-content-center align-items-center'>
        <p>{data.bio}</p>
      </div>
      <div className='flex justify-content-center align-items-center'>
        <div className='flex flex-column'>
          {data.links.map((link) => (
            <Button
              className="m-2 p-button-outlined"
              style={{ color: colors[link.icon] }}
            >
              <i className={`pi pi-${link.icon} px-3`} ></i>
              {link.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
