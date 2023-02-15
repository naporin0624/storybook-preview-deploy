import { createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
    text: null,
    white: null,
  },
  bg: {
    primary: null,
    disabled: null,
  },
  font: {
    body: null,
  },
});
