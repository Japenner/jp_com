import { Box, IconButton, Link, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const searchBar = () => {
    return (
      <Box display='flex'>
        <Link href='/'>
          <IconButton>
            <HomeOutlinedIcon />
          </IconButton>
        </Link>
        <Box
          sx={{
            display: "flex",
            backgroundColor: colors.primary[400],
            borderRadius: "3px",
          }}
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
    )
  }

  const iconCluster = () => {
    return (
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <Link href='/about'>
          <IconButton>
            <HelpOutlinedIcon />
          </IconButton>
        </Link>
        <Link href='/resume'>
          <IconButton>
            <ArticleOutlinedIcon />
          </IconButton>
        </Link>
        <Link href='/notes'>
          <IconButton>
            <RateReviewOutlinedIcon />
          </IconButton>
        </Link>
        <Link href='/contact'>
          <IconButton>
            <ContactMailOutlinedIcon />
          </IconButton>
        </Link>
      </Box>
    )
  }

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {searchBar()}
      {iconCluster()}
    </Box>
  );
};

export default Topbar;
