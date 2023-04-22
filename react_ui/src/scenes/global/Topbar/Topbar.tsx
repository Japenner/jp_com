import { Box, IconButton, Link, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchIcon from "@mui/icons-material/Search";
import useMediaQuery from "../../../hooks/useMediaQuery";
import React from "react";
// import AnchorLink from "react-anchor-link-smooth-scroll";

declare type Props = {
  isTopOfPage: boolean;
  selectedPage: string;
  setSelectedPage: any;
  links: string[];
};

declare type NavLinkProps = {
  page: any;
  selectedPage: string;
  setSelectedPage: any;
};

const Topbar = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
  links,
}: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const topBarBackground = isTopOfPage ? "" : "topbar__not-top";

  const LogoButton = () => {
    return (
      <div className="topbar__logo-container">
        <div className="topbar__logo">
          <a href="/">JP</a>
        </div>
      </div>
    );
  };

  const ThemeToggleButton = () => {
    return (
      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === "dark" ? (
          <DarkModeOutlinedIcon />
        ) : (
          <LightModeOutlinedIcon />
        )}
      </IconButton>
    );
  };

  const SearchBar = () => {
    return (
      <Box className="topbar__search-container">
        <Box
          className="topbar__search"
          sx={{ backgroundColor: colors.primary[400] }}
        >
          <InputBase sx={{ flex: 1 }} placeholder="Search" />
          <IconButton type="button">
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
    );
  };

  const NavCluster = () => {
    return (
      <Box className="topbar__links">
        <React.Fragment>
          {links.map((link: string) => (
            <NavLink
              key={link.toLowerCase()}
              page={link}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </React.Fragment>
        <ThemeToggleButton />
      </Box>
    );
  };

  const NavLink = ({ page, selectedPage, setSelectedPage }: NavLinkProps) => {
    const lowerCasePage = page.toLowerCase();
    return (
      <Link // <AnchorLink
        className={`${selectedPage === lowerCasePage ? "selected" : ""}`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
      >
        {page}
      </Link>
    );
  };

  return (
    <nav className={`topbar ${topBarBackground}`}>
      <LogoButton />
      {/* <SearchBar /> */}
      {/* DESKTOP NAV */}
      {isAboveSmallScreens ? (
        <NavCluster />
      ) : (
        <div>
          <IconButton
            className="topbar__mobile-nav_toggle"
            aria-label="menu-icon"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <MenuOutlinedIcon />
          </IconButton>
        </div>
      )}
      {/* MOBILE MENU POPUP */}
      {!isAboveSmallScreens && isMenuToggled && (
        <div className="topbar__mobile-nav">
          {/* CLOSE ICON */}
          <div>
            <IconButton
              className="topbar__mobile-nav_close"
              aria-label="close-icon"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <CloseOutlinedIcon />
            </IconButton>
          </div>

          {/* MENU ITEMS */}
          <div className="topbar__mobile-nav_menu-items">
            <React.Fragment>
              {links.map((link: string) => (
                <NavLink
                  key={link.toLowerCase()}
                  page={link}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              ))}
            </React.Fragment>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Topbar;
