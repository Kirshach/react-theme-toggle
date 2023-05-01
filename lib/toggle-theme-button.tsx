import React, { type FC } from "react";

import { useThemeToggleValueState } from "./hooks/use-theme-toggle-value";
import { type ToggleValue } from "./theme-context";

const handleButtonClick = ({
  toggleValue,
  setToggleValue,
}: {
  toggleValue: ToggleValue;
  setToggleValue: (value: ToggleValue) => void;
}) => {
  let newValue: ToggleValue;

  switch (toggleValue) {
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

  setToggleValue(newValue);
};

export const ToggleThemeButton: FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, onClick = () => {}, ...props }) => {
  const [toggleValue, setToggleValue] = useThemeToggleValueState();

  return (
    <button
      type="button"
      aria-pressed={
        toggleValue === "dark"
          ? "true"
          : toggleValue === "light"
          ? "false"
          : "mixed"
      }
      aria-label="Toggle theme: light (off), system preference (mixed), or dark (on)"
      {...props}
      onClick={(e) => {
        handleButtonClick({ toggleValue, setToggleValue });
        onClick(e);
      }}
    >
      {children}
    </button>
  );
};
