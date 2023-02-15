import { createTheme } from "@vanilla-extract/css";

import { vars } from "./base.css";

export const darkTheme = createTheme(vars, {
  color: {
    text: "#ededed",
    white: "#ededed",
  },
  bg: {
    primary: "#37a9ff",
    disabled: "rgba(255, 255, 255, 0.12)",
  },
  font: {
    body: "arial",
  },
});
