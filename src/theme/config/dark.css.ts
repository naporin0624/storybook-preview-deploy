import { createTheme } from "@vanilla-extract/css";

import { vars } from "./base.css";

export const darkTheme = createTheme(vars, {
  color: {
    brand: "blue",
  },
  font: {
    body: "arial",
  },
});
