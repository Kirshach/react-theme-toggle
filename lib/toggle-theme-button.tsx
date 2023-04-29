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

export const ToggleThemeButton: FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, onClick = () => {}, ...props }) => {
  const { themeToggleValue, handleThemeToggleChange } = useThemeToggle();

  return (
    <button
      {...props}
      type="button"
      onClick={(e) => {
        handleButtonClick({ themeToggleValue, handleThemeToggleChange });
        onClick(e);
      }}
    >
      {children}
    </button>
  );
};
