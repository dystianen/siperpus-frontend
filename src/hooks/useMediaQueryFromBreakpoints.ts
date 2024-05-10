"use client";
import { useMediaQuery } from "@mantine/hooks";
import { MantineSize, useMantineTheme } from "@mantine/core";

interface useMediaQueryFromBreakpointsParams {
  (breakpoint?: MantineSize | "mobile", query?: "max-width" | "min-width"):
    | boolean
    | undefined;
}

export const useMediaQueryFromBreakpoints: useMediaQueryFromBreakpointsParams =
  (breakpoint = "mobile", query = "max-width") => {
    const theme = useMantineTheme();
    const bool = useMediaQuery(
      `(${query}: ${theme.breakpoints[breakpoint]})`,
      undefined,
      {
        getInitialValueInEffect: false,
      }
    );

    return bool !== undefined ? bool : false;
  };
