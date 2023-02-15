import { style } from "@vanilla-extract/css";

import { vars } from "theme";

/**
 * @package
 */
export const container = style({
  all: "unset",
  display: "revert",
  boxSizing: "border-box",
  color: vars.color.white,
  padding: "0.5em 1em",
  cursor: "pointer",
  background: vars.bg.primary,
  borderRadius: "0.5em",
  transition: "background 0.3s ease-in-out",
  ":focus": {
    outline: "solid",
  },
  ":disabled": {
    background: vars.bg.disabled,
    cursor: "default",
    outline: "none",
  },
});
