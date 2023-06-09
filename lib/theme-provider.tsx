import React, { useEffect, useState } from "react";
import { type PropsWithChildren, type FC } from "react";

import {
  LOCAL_STORAGE_THEME_TOGGLE_VALUE_KEY,
  ThemeContext,
  type Theme,
  type ToggleValue,
} from "./theme-context";

const localStorageThemeToggleValue = localStorage.getItem(
  LOCAL_STORAGE_THEME_TOGGLE_VALUE_KEY
) as ToggleValue | null;

const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [toggleValue, setToggleValue] = useState<ToggleValue>(
    localStorageThemeToggleValue || "media"
  );
  const [mediaQueryValue, setMediaQueryValue] = useState<Theme>(
    darkModeMediaQuery.matches ? "dark" : "light"
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_THEME_TOGGLE_VALUE_KEY, toggleValue);

    if (toggleValue === "media") {
      const handleMediaQueryChange = (e: MediaQueryListEvent) => {
        setMediaQueryValue(e.matches ? "dark" : "light");
      };

      darkModeMediaQuery.addEventListener("change", handleMediaQueryChange);
      return () =>
        darkModeMediaQuery.removeEventListener(
          "change",
          handleMediaQueryChange
        );
    }
  }, [toggleValue, setMediaQueryValue]);

  return (
    <ThemeContext.Provider
      value={{ toggleValue, setToggleValue, mediaQueryValue }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
