# react-theme-toggle

A simple React component to toggle between light, dark, and system-preferred color schemes.

## Features

- Toggles between light, dark, and system (media) themes
- Preserves theme preference across page reloads
- Reactive: theme and OS preference changes are reflected in real time
- Provides custom hooks for easy theme handling
- Compatible with React 16.8.0 and later

## Installation

```bash
npm install react-theme-toggle
```

## Usage

First, wrap your application with the ThemeProvider component:

```jsx
import { ThemeProvider } from "react-theme-toggle";

const App = () => {
  return <ThemeProvider>{/* Your application components */}</ThemeProvider>;
};
```

Then, use the ThemeToggleButton component to add a button that toggles the theme:

```jsx
import { ToggleThemeButton } from "react-theme-toggle";

const Header = () => {
  return (
    <header>
      {/* Other header content */}
      <ToggleThemeButton> Toggle Theme </ToggleThemeButton>
    </header>
  );
};
```

To access the current theme, use the useTheme hook:

```jsx
import { useTheme } from "react-theme-toggle";

const MyComponent = () => {
  const theme = useTheme();

  return <div className={`my-component ${theme}`}>Hello, world!</div>;
};
```

For more advanced use cases, you can use the useThemeToggleValueState hook to get the current theme toggle value and a function to change it:

```jsx
import { useThemeToggleValueState } from "react-theme-toggle";

const CustomThemeToggle = () => {
  const [themeToggleValue, setThemeToggleValue] = useThemeToggleValueState();

  return (
    <div>
      Current toggle value: {themeToggleValue}
      <button onClick={() => handleThemeToggleChange("dark")}>
        Switch to dark theme
      </button>
    </div>
  );
};
```

## Styling

The ThemeToggleButton component accepts a className prop that can be used to style the button.
To style different states of the button, consider utilizing the component's className along with the aria-pressed attribute:

```css
.theme-toggle-button {
  /* Default button styles */
}

.theme-toggle-button[aria-pressed="false"] {
  /* Button styles for "light" theme toggle value */
}
.theme-toggle-button[aria-pressed="mixed"] {
  /* Button styles for "media" theme toggle value */
}
.theme-toggle-button[aria-pressed="true"] {
  /* Button styles for "dark" theme toggle value */
}
```

## API Reference

| Component         | Description                                                                                  | Props                                           |
| ----------------- | -------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| ThemeProvider     | A context provider for handling the theme state. Wrap your app with this component.          | { children: React.ReactNode }                   |
| ThemeToggleButton | A button component for toggling the theme. Switched themes from "light" to "media" to "dark" | React.ButtonHTMLAttributes\<HTMLButtonElement\> |

| Hook                     | Description                                                                      | Returns                                                                                                                                                                                                     |
| ------------------------ | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| useTheme                 | A hook to access the current theme.                                              | A string representing the current theme. Possible values: "light" or "dark" ("media" toggle state will result in either "light" or "dark" value being returned, depending on the user's system preference). |
| useThemeToggleValueState | A hook to get the current theme toggle value and a function to change its value. | A tuple with the following elements: 1. The current theme toggle value (one of: "light", "dark", "media"). 2. A function to change the theme toggle value. Accepts a Theme value as its argument.           |

## License

ISC
