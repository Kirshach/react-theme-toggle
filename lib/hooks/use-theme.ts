import { useContext } from "react";

import { ThemeContext } from "../theme-context";

/**
 * Returns the current theme.
 */
export const useTheme = () => {
  const { toggleValue, mediaQueryValue } = useContext(ThemeContext);

  if (!toggleValue || !mediaQueryValue) {
    throw new Error(
      "Attempting to use 'useTheme' hook outside <ThemeProvider /> "
    );
  }

  const theme = toggleValue === "media" ? mediaQueryValue : toggleValue;

  return theme;
};
