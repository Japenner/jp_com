import React from 'react';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';

const Header = () => {
  const startContent = (
    <React.Fragment>
      <Button icon="pi pi-home" rounded text aria-label='Home' />
    </React.Fragment>
  );

  const endContent = (
    <React.Fragment>
      <Button icon="pi pi-github" rounded text aria-label='Github' />
      <Button icon="pi pi-linkedin" rounded text aria-label='LinkedIn' />
    </React.Fragment>
  );

  return (
    <div>
      <Toolbar
        start={startContent}
        end={endContent}
        />
    </div>
  )
}

export default Header;
