import { MantineThemeOverride, em } from "@mantine/core";

export const kpTheme: MantineThemeOverride = {
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
      "#4D545C", // <= This is regarding figma color design
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
      successLight2: "#E3FCE5",
      primary: "#0055B8",
      "primary-1": "#F5FAFF",
      "primary-2": "#EFF7FF",
      "primary-3": "#D6EBFF",
      "primary-4": "#007BE0",
      "primary-5": "#002E6D",
      "primary-6": "#002252",
      "primary-7": "#E2EEFF",
      "primary-8": "#1067CD",
      "primary-9": "#08247C",
      "primary-10": "#529AFF",
      "primary-11": "#0045A5",
      "primary-12": "#FEEFEF",
      "primary-13": "#EBF2FD",
      "primary-14": "#0971B7",
      "primary-15": "#2BAAE2",
      "primary-16": "#2C6DE6",
      "primary-17": "#184AA4",
      "primary-18": "#91CDFF",
      "primary-19": "#BFD8EF",
      "primary-20": "#D6EBFF",
      "primary-21": "#F5F5F5",
      secondary: "#FFCE00",
      "secondary-1": "#FFF7D7",
      "secondary-2": "#FFE784",
      "secondary-3": "#998122",
      "secondary-4": "#FF9E16",
      "secondary-5": "#FFEBB4",
      "secondary-6": "#FFEE00",
      danger: "#D92037",
      "danger-1": "#FEE6E9",
      "danger-2": "#F7B1B9",
      "danger-3": "#A41929",
      "danger-4": "#fa5252",
      "danger-5": "#FE2323",
      success: "#019859",
      "success-1": "#E3FCE5",
      "success-2": "#09B95A",
      "success-3": "#015B35",
      "success-4": "#00B21C",
      "success-5": "#15bd2f",
      "neutral-1": "#FFFFFF",
      "neutral-2": "#F5F7F9",
      "neutral-3": "#E7EBEE",
      "neutral-4": "#CED4DA",
      "neutral-5": "#A5B0BB",
      "neutral-6": "#868E96",
      "neutral-7": "#4D545C",
      "neutral-8": "#1D252D",
      "neutral-9": "#4C5E6E",
      "neutral-10": "#ECF0F3",
      "neutral-11": "#8996A4",
      "neutral-12": "#B3C1CF",
      "neutral-13": "#ADB5BD",
      "neutral-14": "#353535",
      "Light Blue/Light 2": "#E1F4FE",
      "Green/Light 2": "#E6F5EE",
      "Pink/Light 2": "#FFF2F7",
      "Pink/Light 3": "#fff8e1",
      "Violet/Light 2": "#F0EEFC",
      "purple-1": "#B4ACEF",
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

export default kpTheme;
