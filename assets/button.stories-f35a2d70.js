var a=Object.defineProperty;var n=(t,o)=>a(t,"name",{value:o,configurable:!0});import{j as e}from"./global.css.ts.vanilla-01828110.js";import{a as r}from"./index-19860149.js";import{r as c}from"./index-d1190aa7.js";import"./es.object.get-own-property-descriptor-29fc8fcd.js";import"./iframe-bdb84ad3.js";import"./web.url.constructor-ffa370d3.js";import"./es.number.is-integer-74deee28.js";import"./make-decorator-fc329933.js";var i="v3pxfb0";const l=n(({children:t,...o})=>e("button",{...o,className:i,children:t}),"Button"),s=c.memo(l);try{button.displayName="button",button.__docgenInfo={description:"",displayName:"button",props:{}}}catch{}const k={parameters:{storySource:{source:`import { action } from "@storybook/addon-actions";

import Button from ".";

import type { ButtonProps } from ".";
import type { Story } from "@storybook/react";

export default {
  title: "components/Button",
  component: Button,
};

const Template: Story<ButtonProps> = (args) => (
  <Button {...args} onClick={action("click")} onFocus={action("focus")} onBlur={action("blur")}>
    button
  </Button>
);
export const Default = Template.bind({});

Default.args = {
  disabled: false,
};
`,locationsMap:{default:{startLoc:{col:37,line:13},endLoc:{col:1,line:17},startBody:{col:37,line:13},endBody:{col:1,line:17}}}}},title:"components/Button",component:s},p=n(t=>e(s,{...t,onClick:r("click"),onFocus:r("focus"),onBlur:r("blur"),children:"button"}),"Template"),u=p.bind({});u.args={disabled:!1};const D=["Default"];export{u as Default,D as __namedExportsOrder,k as default};
//# sourceMappingURL=button.stories-f35a2d70.js.map
