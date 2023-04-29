# react-theme-toggle

A simple React component to toggle between light and dark themes.

## Features

- Toggles between light, dark, and system (media) themes
- Provides custom hooks for easy theme handling and toggling
- Leverages React context for seamless integration with your project
- Compatible with React 16.8.0 and later

## Installation

```bash
npm install react-theme-toggle
```

## Usage

First, wrap your application with the ThemeProvider component:

```jsx
import { ThemeProvider } from "react-theme-toggle";

function App() {
  return <ThemeProvider>{/* Your application components */}</ThemeProvider>;
}

export default App;
```

Next, use the ThemeToggle component to provide a button for users to switch themes:

```jsx
import { ThemeToggle } from "react-theme-toggle";

function Navbar() {
  return (
    <nav>
      {/* Other navbar elements */}
      <ThemeToggle>Toggle Theme</ThemeToggle>
    </nav>
  );
}

export default Navbar;
```

To access the current theme, use the useTheme hook:

```jsx
import { useTheme } from "react-theme-toggle";

function MyComponent() {
  const theme = useTheme();

  return <div className={`my-component ${theme}`}>Hello, world!</div>;
}

export default MyComponent;
```

For more advanced use cases, you can use the useThemeToggle hook to get the current theme toggle value and a function to change the theme:

```jsx
import { useThemeToggle } from "react-theme-toggle";

function CustomThemeToggle() {
  const { themeToggleValue, handleThemeToggleChange } = useThemeToggle();

  return (
    <button onClick={() => handleThemeToggleChange("dark")}>
      Switch to dark theme
    </button>
  );
}

export default CustomThemeToggle;
```

## API Reference

| Component     | Description                                                                         | Props                                |
| ------------- | ----------------------------------------------------------------------------------- | ------------------------------------ |
| ThemeProvider | A context provider for handling the theme state. Wrap your app with this component. | children: React.ReactNode (required) |
| ThemeToggle   | A button component for toggling the theme.                                          | children: React.ReactNode (required) |

| Hook           | Description                                                                      | Returns                                                                                                                                                                                                                                        |
| -------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| useTheme       | A hook to access the current theme.                                              | A string representing the current theme. Possible values: "light", "dark", or "media" (which will return either "light" or "dark" based on the user's system preference).                                                                      |
| useThemeToggle | A hook to get the current theme toggle value and a function to change the theme. | An object with the following properties: - themeToggleValue: The current theme toggle value (one of: "light", "dark", "media"). - handleThemeToggleChange: A function to change the theme toggle value. Accepts a Theme value as its argument. |

## License

ISC