import React, { useContext, useMemo } from "react";

import { type Theme, ThemeContext } from "../theme-context";

export const useThemeToggle = () => {
  const { toggleValue, setToggleValue } = useContext(ThemeContext);

  if (!toggleValue || !setToggleValue) {
    throw new Error(
      "Attempting to use 'useThemeToggle' hook outside <ThemeProvider /> "
    );
  }

  return useMemo(
    () => ({
      themeToggleValue: toggleValue,
      handleThemeToggleChange: (value: Theme) => {
        setToggleValue(value);
      },
    }),
    [toggleValue, setToggleValue]
  );
};
