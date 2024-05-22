import { MantineThemeOverride, em } from "@mantine/core";

export const Theme: MantineThemeOverride = {
  // Typography base
  fontFamily:
    "Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",

  // Add your own custom properties on Mantine theme
  other: {
    borderRadius: {
      "5px": "5px",
      "10px": "10px",
      "15px": "15px",
      "20px": "20px",
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
