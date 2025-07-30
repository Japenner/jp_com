// src/components/TextGenerateEffect.styles.ts
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

// Root container replaces the Tailwind "font-bold" class.
export const Root = styled(Box)(() => ({
  fontWeight: "bold",
}));

// Wrapper applies a top margin (similar to "mt-4").
export const Wrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

// Container for the animated text.
export const WordContainer = styled(Box)(() => ({}));

// Styled motion.span for highlighted words (using the theme's primary color).
export const HighlightSpan = styled(motion.span)(({ theme }) => ({
  color: theme.palette.primary.main,
  opacity: 0, // Initial opacity for the animation.
}));

// Styled motion.span for normal words (using the theme's text color).
export const NormalSpan = styled(motion.span)(({ theme }) => ({
  color: theme.palette.text.primary,
  opacity: 0, // Initial opacity for the animation.
}));
