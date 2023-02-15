import { createTheme } from "@vanilla-extract/css";

import { vars } from "./base.css";

export const lightTheme = createTheme(vars, {
  color: {
    text: "#2d2d2d",
    white: "#ededed",
  },
  bg: {
    primary: "#0068b7",
    disabled: "rgba(0, 0, 0, 0.12)",
  },
  font: {
    body: "comic sans ms",
  },
});
