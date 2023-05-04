import { useEffect } from "react";

declare type Props = {
  setSelectedPage: any;
}

const colors: any = {
  linkedin: "blue",
  github: "black",
};

const data = {
  name: "Jacob Penner",
  image: "https://github.com/japenner.png",
  bio: "Hi there, my name is Jacob Penner. I'm a full stack developer who loves to tinker.",
  links: [
    {
      name: "My GitHub",
      url: "https://github.com/japenner",
      icon: "github",
    },
    {
      name: "My LinkedIn",
      url: "https://www.linkedin.com/in/japenner/",
      icon: "linkedin",
    },
  ],
};

const About = (props: Props) => {
  const { setSelectedPage } = props;

  useEffect(() => {
    setSelectedPage("about");
  });

  return (
    <div className="about-container">
      <div className="about__avatar">
        <div>
          <img src={data.image} alt="avatar" />
        </div>
        <h1 className="about__title">{data.bio}</h1>
      </div>
      <div className="about__bio">
        <p>
          I'm a Senior Software Developer with a passion for
          creating customer-oriented products that meet user needs. I have
          expertise in developing full-stack web applications, architecting
          database systems, and implementing security measures to keep data
          safe.
        </p>
        <p>
          Throughout my career, I have worked with a variety of programming
          languages such as Ruby, Kotlin, C#, and Java, and have experience
          working with popular frameworks such as Ruby on Rails, React, and .NET
          Core. I am also knowledgeable in different architectures such as MVC,
          microservices, and service-oriented architecture.
        </p>
        <p>
          What drives me is a passion for creating products that meet the needs
          of both customers and businesses. I believe that well-designed and
          well-implemented software can revolutionize the way people work and
          live. I strive to create software that is not only functional and
          efficient but also user-friendly and accessible to everyone.
        </p>
        <p>
          I have experience in leading teams of developers, mentoring junior
          developers, and working closely with product managers to ensure the
          development process aligns with business goals. I have also
          implemented security measures in applications, using automated
          security suites to monitor and address application security threats.
        </p>
        <p>
          If you're looking for a senior software engineer who can hit the
          ground running and work collaboratively to achieve your goals, let's
          chat.
        </p>
      </div>
      <div className="about__link-container">
        <div className="about__links">
          {data.links.map((link) => (
            <button
              key={link.icon}
              className="about__link"
              style={{ color: colors[link.icon] }}
            >
              <i className={`pi pi-${link.icon} px-3`}></i>
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
