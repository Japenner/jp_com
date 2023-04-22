import Landing from "../../pages/Landing/Landing";
import DotGroup from "./DotGroup";

declare type Props = {
  links: string[];
  selectedPage: string;
  setSelectedPage: any;
  isAboveMediumScreens: boolean;
};

const DotNav = ({
  isAboveMediumScreens,
  selectedPage,
  setSelectedPage,
  links,
}: Props) => {
  return (
    <div className="dot-nav-container">
      {isAboveMediumScreens && (
        <DotGroup
          links={links}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      )}
      {/* <Landing setSelectedPage={setSelectedPage} /> */}
    </div>
  );
};

export default DotNav;
