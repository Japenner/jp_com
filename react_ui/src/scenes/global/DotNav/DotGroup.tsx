import React from "react";
import { Link } from '@mui/material';

declare type Props = {
  links: string[];
  selectedPage: string;
  setSelectedPage: any;
}

const DotGroup = ({ selectedPage, setSelectedPage, links }: Props) => {
  return (
    <div className='dot-group-container'>
      <React.Fragment>
        {links.map((link: string) => (
          <Link // <AnchorLink
            className={`dot-group__link ${selectedPage === link.toLowerCase() ? "selected" : "unselected"}`}
            href={`#${link.toLowerCase()}`}
            onClick={() => setSelectedPage(link.toLowerCase())}
          />
        ))}
      </React.Fragment>
    </div>
  )
}

export default DotGroup
