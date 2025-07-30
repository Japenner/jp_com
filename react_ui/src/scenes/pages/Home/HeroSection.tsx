// src/components/HeroSection.tsx
import React from "react";
import { Box, Typography, Link as MuiLink } from "@mui/material";
// import { ChevronRight, Download } from "lucide-react";
// import ShinyButton from "./ui/ShinyButton";
// import AnimatedTooltip from "./ui/AnimatedTooltip";
// import { tooltipItems } from "../_lib/constants";
import TextGenerateEffect from "./TextGenerateEffect";
import {
  HeroSectionContainer,
  RadialBackground,
  HeroContent,
} from "./HeroSection.styles";

const HeroSection: React.FC = () => {
  return (
    <>
      <HeroSectionContainer>
        <RadialBackground />
      </HeroSectionContainer>

      <HeroContent id="home">
        <Typography
          variant="overline"
          component="p"
          sx={{ fontWeight: "bold", letterSpacing: 2, mb: 1 }}
        >
          Based In Ohio
        </Typography>

        <TextGenerateEffect
          words="Quality Design & Web Development Synergy"
          className="hero-heading" // Optionally add a custom class if needed
        />

        <Typography
          variant="body1"
          sx={{
            pt: 2,
            pb: 3,
            color: "text.secondary",
            maxWidth: 600,
          }}
        >
          Hi, I&apos;m Jacob, I create intuitive, visually stunning and highly
          functional web applications.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            alignItems: "center",
          }}
        >
          {/* <ShinyButton icon={<ChevronRight />}>
            <MuiLink href="#work" underline="none" color="inherit">
              See My Work
            </MuiLink>
          </ShinyButton> */}
          <MuiLink
            href="/resume/CV_en.pdf"
            download
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontWeight: "bold",
              transition: "color 200ms",
              "&:hover": { color: "white", opacity: 0.7 },
            }}
          >
            {/* <Download color="primary" /> */}
            <span>Download CV</span>
          </MuiLink>
        </Box>

        <Box
          sx={{
            mt: 4,
            mb: 2,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* <AnimatedTooltip items={tooltipItems} /> */}
        </Box>
      </HeroContent>
    </>
  );
};

export default HeroSection;
