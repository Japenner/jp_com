import React from "react";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";

const Navbar = () => {
  const startContent = (
    <React.Fragment>
      <Button
        key="home"
        icon="pi pi-home"
        rounded
        text
        aria-label="Home"
        onClick={() => navigateTo("/")}
      />
    </React.Fragment>
  );

  const navigateTo = (route: string) => {
    window.location.href = route;
  };

  const endLinks = ["About", "Resume", "Notes", "Contact"];
  const buildLinks = (links: Array<string>) => {
    return (
      <React.Fragment>
        {links.map((link) => (
          <Button
            key={link.toLowerCase()}
            link
            aria-label={link}
            onClick={() => navigateTo(`/${link.toLowerCase()}`)}
          >
            {link}
          </Button>
        ))}
      </React.Fragment>
    );
  };

  return (
    <div>
      <Toolbar start={startContent} end={buildLinks(endLinks)} />
    </div>
  );
};

export default Navbar;
