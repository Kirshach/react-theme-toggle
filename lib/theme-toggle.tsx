import React, { type FC } from "react";

import { useThemeToggle } from "./hooks/use-theme-toggle";
import { type Theme } from "./theme-context";

const handleButtonClick = ({
  themeToggleValue,
  handleThemeToggleChange,
}: {
  themeToggleValue: Theme;
  handleThemeToggleChange: (value: Theme) => void;
}) => {
  let newValue: Theme;

  switch (themeToggleValue) {
    case "light":
      newValue = "media";
      break;
    case "media":
      newValue = "dark";
      break;
    case "dark":
      newValue = "light";
      break;
    default:
      newValue = "media";
  }

  handleThemeToggleChange(newValue);
};

export const ThemeToggle: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { themeToggleValue, handleThemeToggleChange } = useThemeToggle();

  return (
    <button
      type="button"
      onClick={() =>
        handleButtonClick({ themeToggleValue, handleThemeToggleChange })
      }
    >
      {children}
    </button>
  );
};
