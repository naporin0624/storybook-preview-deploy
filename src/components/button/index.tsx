import { memo } from "react";

import * as styles from "./styles.css";

import type { ComponentPropsWithoutRef, FC, PropsWithChildren } from "react";

export type ButtonProps = Omit<ComponentPropsWithoutRef<"button">, "className" | "style">;

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.container}>
      {children}
    </button>
  );
};

export default memo(Button);
