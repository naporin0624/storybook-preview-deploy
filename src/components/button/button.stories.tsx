import Button from ".";

import type { ButtonProps } from ".";
import type { Story } from "@storybook/react";

export default {
  title: "components/Button",
  component: Button,
};

const Template: Story<ButtonProps> = (args) => <Button {...args}>button</Button>;
export const Default = Template.bind({});
