import React from 'react';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import AnimatedPage from '../../components/AnimatedPage';

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
        <p>
          Hey there, I'm Jacob, a Senior Software Engineer with a passion for creating customer-oriented products that meet user needs. I have expertise in developing full-stack web applications, architecting database systems, and implementing security measures to keep data safe.
        </p>
        <p>
          Throughout my career, I have worked with a variety of programming languages such as Ruby, Kotlin, C#, and Java, and have experience working with popular frameworks such as Ruby on Rails, React, and .NET Core. I am also knowledgeable in different architectures such as MVC, microservices, and service-oriented architecture.
        </p>
        <p>
          What drives me is a passion for creating products that meet the needs of both customers and businesses. I believe that well-designed and well-implemented software can revolutionize the way people work and live. I strive to create software that is not only functional and efficient but also user-friendly and accessible to everyone.
        </p>
        <p>
          I have experience in leading teams of developers, mentoring junior developers, and working closely with product managers to ensure the development process aligns with business goals. I have also implemented security measures in applications, using automated security suites to monitor and address application security threats.
        </p>
        <p>
          If you're looking for a senior software engineer who can hit the ground running and work collaboratively to achieve your goals, let's chat.
        </p>
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
