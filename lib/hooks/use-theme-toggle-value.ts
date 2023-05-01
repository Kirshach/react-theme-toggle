import { useContext } from "react";

import { ThemeContext } from "../theme-context";

/**
 * Returns the current toggle value.
 */
export const useThemeToggleValueState = () => {
  const { toggleValue, setToggleValue } = useContext(ThemeContext);

  if (!toggleValue || !setToggleValue) {
    throw new Error(
      "Attempting to use 'useThemeState' hook outside <ThemeProvider /> "
    );
  }

  return [toggleValue, setToggleValue] as const;
};
