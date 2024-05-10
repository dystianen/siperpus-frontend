import { MantineThemeOverride, em } from "@mantine/core";

export const Theme: MantineThemeOverride = {
  // Typography base
  fontFamily:
    "Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
  // Color palette
  colors: {
    primary: [
      "#F5FAFF", // <= This is regarding figma color design
      "#EFF7FF", // transparent paper <= This is regarding figma color design
      "#D6EBFF", // mainMenuIcon <= This is regarding figma color design
      "#007BE0", // 3 <= This is regarding figma color design
      "#2D74C6",
      "#0055B8", // 5 <= This is regarding figma color design
      "#004493", // contained color
      "#002E6D", // contained onHover <= This is regarding figma color design
      "#002252", // <= This is regarding figma color design
      "#001A37",
    ],
    secondary: [
      "#FFF7D7", // 0 <= This is regarding figma color design
      "#FFF0B3",
      "#FFE784", // 2 (MainMenuIcons yellow bg) <= This is regarding figma color design
      "#FFE266",
      "#FFD833",
      "#FFCE00", // 5 <= This is regarding figma color design
      "#CCA500",
      "#998222", // <= This is regarding figma color design
      "#665200",
      "#4D3E00",
    ],
    danger: [
      "#FEE6E9", // <= This is regarding figma color design
      "#F4BCC3", // <= This is regarding figma color design
      "#F7B1B9",
      "#E87987",
      "#E14D5F",
      "#D92037", // 5 <= This is regarding figma color design
      "#A41929", // <= This is regarding figma color design
      "#821321",
      "#570D16",
      "#410A11",
    ],
    success: [
      "#DAFBDC", // <= This is regarding figma color design
      "#88E0BB",
      "#75D6AD",
      "#4EC191",
      "#09B95A", // 4 <= This is regarding figma color design
      "#019859", // 5 <= This is regarding figma color design
      "#017A47",
      "#015B35", // <= This is regarding figma color design
      "#003D24",
      "#557153",
    ],
    neutral: [
      "#FFFFFF", // <= This is regarding figma color design
      "#F5F7F9", // <= This is regarding figma color design
      "#E7EBEE", // <= This is regarding figma color design
      "#E2E5E9",
      "#CED4DA", // <= This is regarding figma color design
      "#A5B0BB", // 5 (grey Arrow right) <= This is regarding figma color design
      "#B0B6BD",
      "#868E96", // 7 <= This is regarding figma color design
      "#555555", // <= This is regarding figma color design
      "#1D252D", // <= This is regarding figma color design,
    ],
  },
  // Add your own custom properties on Mantine theme
  other: {
    borderRadius: {
      "5px": "5px",
      "10px": "10px",
      "15px": "15px",
      "20px": "20px",
    },
    colors: {
    },
  },
  // Responsive breakpoint
  breakpoints: {
    xs: em(0),
    mobile: em(480),
    sm: em(576),
    md: em(768),
    lg: em(992),
    xl: em(1200),
    "2xl": em(1400),
    full_hd: em(1920),
    "4k": em(3840),
  },
  fontSizes: {
    "8px": "0.625rem",
    "10px": "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
  },
};

export default Theme;
