import { createTheme } from "@vanilla-extract/css";

import { vars } from "./base.css";

export const lightTheme = createTheme(vars, {
  color: {
    brand: "pink",
  },
  font: {
    body: "comic sans ms",
  },
});
