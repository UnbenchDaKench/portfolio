import React from "react";
import { Box } from "@mui/material";
import "./Home.scss";
import FloatingNav from "../../components/floatingNav/FloatingNav";
import { motion } from "framer-motion";
import SocialIcons from "../../components/socialIcons/SocialIcons";
import Gif from "../../images/homepage animation.gif";
import useWindowDimensions from "../../hooks/useWindowDimensions";

// Desktop: diamond / cross. Mobile: two above GIF, two below (horizontal pairs).
const navLinks = [
  { name: "About", position: "top", mobile: { x: -1, y: -1 }, angle: -45, delay: 0.2 },
  { name: "Experience", position: "right", mobile: { x: 1, y: -1 }, angle: 45, delay: 0.3 },
  { name: "Projects", position: "bottom", mobile: { x: -1, y: 1 }, angle: 135, delay: 0.4 },
  { name: "Contact", position: "left", mobile: { x: 1, y: 1 }, angle: -135, delay: 0.5 },
];

const EDGE_PAD = 14;
/** Extra room for float/hover motion so labels are not clipped by overflow:hidden */
const MOTION_PAD = 20;

function clampDiamondSpacing(width, height) {
  const base =
    width < 400 ? 140 : width < 600 ? 180 : width < 768 ? 220 : 350;

  // Rough half-extent of the longest label ("Experience") for horizontal clamping
  const labelHalfW =
    width < 400 ? 62 : width < 480 ? 70 : width < 600 ? 80 : width < 768 ? 95 : 125;
  const maxX = width / 2 - EDGE_PAD - labelHalfW - MOTION_PAD;

  // Vertical: home xs uses maxHeight ~ 100vh − 15em; also cap by viewport so short phones work
  const emPx =
    typeof window !== "undefined"
      ? parseFloat(getComputedStyle(document.documentElement).fontSize) || 16
      : 16;
  const contentH =
    width < 768 ? Math.max(240, height - 15 * emPx - 8) : height - 64;
  const labelHalfH = width < 768 ? 36 : 48;
  const fromContent = contentH / 2 - EDGE_PAD - labelHalfH - MOTION_PAD;
  const fromViewport = height * 0.34 - labelHalfH - MOTION_PAD;
  const maxY = Math.max(0, Math.min(fromContent, fromViewport));

  const cap = Math.min(Math.max(0, maxX), maxY);
  const spacing = Math.min(base, cap);
  return Math.max(44, spacing);
}

function getMobileNavLayout(width, height) {
  const labelHalfW =
    width < 400 ? 62 : width < 480 ? 70 : width < 600 ? 80 : 95;
  const maxX = width / 2 - EDGE_PAD - labelHalfW - MOTION_PAD;
  const horizontalIdeal =
    width < 400 ? 68 : width < 600 ? 88 : 104;
  const horizontal = Math.max(36, Math.min(horizontalIdeal, maxX));

  const emPx =
    typeof window !== "undefined"
      ? parseFloat(getComputedStyle(document.documentElement).fontSize) || 16
      : 16;
  const contentH =
    width < 768 ? Math.max(240, height - 15 * emPx - 8) : height - 64;
  const gifH = width < 600 ? 200 : 250;
  const socialBand = 56;
  // From layout center to above/below GIF: half GIF + social strip + breathing room
  const verticalIdeal = gifH / 2 + socialBand + 28;
  const labelHalfH = 38;
  const maxY = contentH / 2 - EDGE_PAD - labelHalfH - MOTION_PAD;
  const vertical = Math.max(52, Math.min(verticalIdeal, maxY));

  return { horizontal, vertical };
}

function Home({ handleHomePage, isHome }) {
  const { height, width } = useWindowDimensions();

  const isMobileNav = width < 768;
  const diamondSpacing = isMobileNav ? 0 : clampDiamondSpacing(width, height);
  const mobileLayout = isMobileNav ? getMobileNavLayout(width, height) : null;

  const navFontSize =
    width < 400 ? "1.35em" : width < 600 ? "1.55em" : width < 768 ? "2em" : "2.8em";

  const getPosition = (link) => {
    if (isMobileNav && mobileLayout) {
      const { horizontal, vertical } = mobileLayout;
      return {
        x: link.mobile.x * horizontal,
        y: link.mobile.y * vertical,
      };
    }
    const positions = {
      top: { x: 0, y: -diamondSpacing },
      right: { x: diamondSpacing, y: 0 },
      bottom: { x: 0, y: diamondSpacing },
      left: { x: -diamondSpacing, y: 0 },
    };
    return positions[link.position];
  };

  return (
    <Box
      className="home-page"
      sx={{
        color: "secondary.main",
        maxHeight: {
          xs: "calc(100vh - 15em)",
          md: "calc(100vh - 64px)",
        },
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      {/* Navigation Container - centered and handles circular positioning */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Floating Navigation — desktop: diamond; mobile: pairs above / below GIF */}
        {navLinks.map((link) => {
          const { x, y } = getPosition(link);
          
          return (
            <Box
              key={link.name}
              sx={{
                position: "absolute",
                left: "50%",
                top: "50%",
                zIndex: 2,
                pointerEvents: "auto",
              }}
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
            >
              <FloatingNav
                delay={2.8 + link.delay}
                fontSize={navFontSize}
                angle={link.angle}
                compact={width < 768}
              >
                {link.name}
              </FloatingNav>
            </Box>
          );
        })}

        {/* Centered GIF Container */}
        <Box
          className="intro-section"
          component={motion.div}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 2.5,
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
          }}
          sx={{
            position: "relative",
            width: {
              xs: width < 600 ? "60%" : "70%",
              sm: "400px",
              md: "450px",
            },
            height: {
              xs: width < 600 ? "200px" : "250px",
              sm: "280px",
              md: "300px",
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          <Box
            component={motion.img}
            src={Gif}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.6 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <Box
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <SocialIcons />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
