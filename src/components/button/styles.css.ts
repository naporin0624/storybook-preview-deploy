import { style } from "@vanilla-extract/css";

import { vars } from "theme";

/**
 * @package
 */
export const container = style({
  color: vars.color.white,
  padding: "0.25em 0.5em",
  cursor: "pointer",
  background: vars.bg.primary,
  borderRadius: "0.5em",
  transition: "background 0.3s ease-in-out",
  ":focus": {
    outline: "solid"
  },
  ":disabled": {
    background: vars.bg.disabled,
    cursor: "default",
    outline: "none"
  }
});
