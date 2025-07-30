// src/components/HeroSection.styles.ts
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const HeroSectionContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.grey[900]
      : theme.palette.common.white,
  backgroundImage:
    theme.palette.mode === "dark"
      ? "url('/path-to-dark-grid.png')"
      : "url('/path-to-light-grid.png')",
  backgroundRepeat: "repeat",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const RadialBackground = styled(Box)(({ theme }) => ({
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.grey[900]
      : theme.palette.common.white,
  maskImage: "radial-gradient(ellipse at center, transparent 20%, black)",
}));

export const HeroContent = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 10,
  minHeight: "100vh",
  paddingTop: theme.spacing(9),
  paddingBottom: theme.spacing(9),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));
