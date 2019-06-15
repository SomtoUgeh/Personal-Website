import React from "react";
import { ThemeConsumer } from "styled-components";

const Toggle = () => {
  return (
    <ThemeConsumer>
      {theme => (
        <div className="toggle-component-container">
          <div />
          <label htmlFor="theme-controller" className="switch">
            <input
              type="checkbox"
              id="theme-controller"
              onChange={e =>
                theme.setTheme(theme.mode === "dark" ? { mode: "light" } : { mode: "dark" })
              }
              checked={theme.mode === "dark" ? true : false}
            />
            <span className="slider round" />
          </label>
        </div>
      )}
    </ThemeConsumer>
  );
};

export default Toggle;
