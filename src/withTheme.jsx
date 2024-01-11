import { useState } from "react";

const withTheme = (Component) => {
  return (props) => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    return (
      <div>
        <Component {...props} isDarkTheme={isDarkTheme} />
        <button onClick={() => setIsDarkTheme(!isDarkTheme)}>
          Toggle Theme
        </button>
      </div>
    );
  };
};

export default withTheme;
