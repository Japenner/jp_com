import React from 'react';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import AnimatedPage from '../components/AnimatedPage';

const AboutPage = () => {
  const colors: any = {
    linkedin: 'blue',
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
  };

  return (
    <AnimatedPage>
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
              key={link.icon}
              className="m-2 p-button-outlined"
              style={{ color: colors[link.icon] }}
            >
              <i className={`pi pi-${link.icon} px-3`} ></i>
              {link.name}
            </Button>
          ))}
        </div>
      </div>
    </AnimatedPage>
  )
}

export default AboutPage;
