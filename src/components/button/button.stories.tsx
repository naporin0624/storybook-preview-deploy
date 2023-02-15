import { action } from "@storybook/addon-actions";

import Button from ".";

import type { ButtonProps } from ".";
import type { Story } from "@storybook/react";

export default {
  title: "components/Button",
  component: Button,
};

const Template: Story<ButtonProps> = (args) => <Button {...args} onClick={action("click")} onFocus={action("focus")} onBlur={action("blur")}>button</Button>;
export const Default = Template.bind({});

Default.args = {
  disabled: false
};
