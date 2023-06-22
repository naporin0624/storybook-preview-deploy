import { action } from "@storybook/addon-actions";

import TextField from ".";

import type { TextFieldProps } from ".";
import type { Story } from "@storybook/react";

export default {
  title: "components/TextField",
  component: TextField,
  argTypes: {
    value: {
      control: "text"
    }
  }
};

const Template: Story<TextFieldProps> = (args) => (
  <TextField {...args} onClick={action("click")} onFocus={action("focus")} onBlur={action("blur")} onChange={action("change")} />
);
export const Default = Template.bind({});

Default.args = {
  disabled: false,
  readOnly: false,
  placeholder: "placeholder"
};
