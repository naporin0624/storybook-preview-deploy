import { memo } from "react";

import * as styles from "./styles.css";

import type { ComponentPropsWithoutRef, FC} from "react";

export type TextFieldProps = Omit<ComponentPropsWithoutRef<"input">, "type" | "style" | "className">

const TextField: FC<TextFieldProps> = (props) => {
  return <input type="text" {...props} className={styles.container} />;
};

export default memo(TextField);