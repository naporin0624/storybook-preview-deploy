import { memo, useCallback, useState } from "react";

import { ThemeProvider } from "./theme";

import type { FC } from "react";

const App: FC = () => {
  const id = "dark-mode";
  const [isDark, setIsDark] = useState(false);
  const toggle = useCallback(() => {
    setIsDark((b) => !b);
  }, []);

  return (
    <ThemeProvider mode={isDark ? "dark" : "light"}>
      <header>
        <h1>sample app</h1>
        <div>
          <input type="checkbox" id={id} checked={isDark} onChange={toggle} />
          <label htmlFor={id}>dark mode</label>
        </div>
      </header>
    </ThemeProvider>
  );
};

export default memo(App);
