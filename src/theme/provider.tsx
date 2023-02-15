import { darkTheme } from "./config/dark.css";
import { lightTheme } from "./config/light.css";

import type { FC, PropsWithChildren } from "react";
import "./global.css";

export type ThemeProviderProps = {
  mode?: "dark" | "light";
};

export const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({ children, mode = "light" }) => {
  return <div className={mode === "light" ? lightTheme : darkTheme}>{children}</div>;
};
