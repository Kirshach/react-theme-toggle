import React, { createContext } from "react";

export const ThemeContextToggleValue = {
  LIGHT: "light",
  MEDIA: "media",
  DARK: "dark",
} as const;

export type ToggleValue =
  (typeof ThemeContextToggleValue)[keyof typeof ThemeContextToggleValue];
export type Theme = Exclude<ToggleValue, "media">;

export interface ThemeContextValue {
  toggleValue?: ToggleValue;
  mediaQueryValue?: Theme;
  setToggleValue?: React.Dispatch<React.SetStateAction<ToggleValue>>;
}

export const ThemeContext = createContext<ThemeContextValue>({});

export const LOCAL_STORAGE_THEME_TOGGLE_VALUE_KEY =
  "react-theme-toggle__current-toggle-value";
