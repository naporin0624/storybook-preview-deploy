import { style } from "@vanilla-extract/css";

import { vars } from "theme";

/**
 * @package
 */
export const container = style({
  color: vars.color.text,
  padding: "0.25em 0.5em",
  borderRadius: "0.5em",
  transition: "background 0.3s ease-in-out",
  border: `solid 1px ${vars.color.white}`,
  boxSizing: "border-box",
  ":focus": {
    outline: "solid",
  },
  ":disabled": {
    background: vars.bg.disabled
  }
});
