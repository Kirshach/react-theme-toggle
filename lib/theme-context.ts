import React, { createContext } from "react";

export const ThemeContextToggleValue = {
  LIGHT: "light",
  MEDIA: "media",
  DARK: "dark",
} as const;

export type Theme =
  (typeof ThemeContextToggleValue)[keyof typeof ThemeContextToggleValue];

export interface ThemeContextValue {
  toggleValue?: Theme;
  mediaQueryValue?: Exclude<Theme, "media">;
  setToggleValue?: React.Dispatch<React.SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextValue>({});

export const LOCAL_STORAGE_THEME_TOGGLE_VALUE_KEY = "app_theme_toggle_value";
