import React, { type FC } from "react";

import { useThemeToggleValueState } from "./hooks/use-theme-toggle-value";
import { type ToggleValue } from "./theme-context";

const handleButtonClick = ({
  toggleValue,
  setToggleValue,
  toggleOrder,
}: {
  toggleValue: ToggleValue;
  setToggleValue: (value: ToggleValue) => void;
  toggleOrder: ToggleValue[];
}) => {
  setToggleValue(
    toggleOrder[(toggleOrder.indexOf(toggleValue) + 1) % toggleOrder.length]
  );
};

export const ToggleThemeButton: FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    toggleOrder?: ToggleValue[];
  }
> = ({
  toggleOrder = ["light", "media", "dark"],
  children,
  onClick = () => {},
  ...props
}) => {
  const [toggleValue, setToggleValue] = useThemeToggleValueState();

  if (toggleOrder.length > 3 || toggleOrder.length < 2) {
    throw new Error(
      `ToggleThemeButton has no clue what to do with [${toggleOrder.join(
        ", "
      )}] toggleOrder. It must be an array of 2 or 3 values.`
    );
  }

  return (
    <button
      type="button"
      aria-pressed={
        toggleValue === toggleOrder[0]
          ? "false"
          : toggleValue === toggleOrder[toggleOrder.length - 1]
          ? "true"
          : "mixed"
      }
      aria-label={
        toggleOrder.length === 3
          ? `Toggle theme: ${toggleOrder[0]} (off), ${toggleOrder[1]} (mixed), or ${toggleOrder[2]} (on)`
          : `Toggle theme: ${toggleOrder[0]} (off) or ${toggleOrder[1]} (on)`
      }
      {...props}
      onClick={(e) => {
        handleButtonClick({ toggleValue, setToggleValue, toggleOrder });
        onClick(e);
      }}
    >
      {children}
    </button>
  );
};
