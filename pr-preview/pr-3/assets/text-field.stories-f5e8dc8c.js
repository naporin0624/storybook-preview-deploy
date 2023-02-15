var l=Object.defineProperty;var o=(e,a)=>l(e,"name",{value:a,configurable:!0});import{j as n}from"./global.css.ts.vanilla-01828110.js";import{a as t}from"./index-a60f1a08.js";import{r as c}from"./index-d1190aa7.js";import"./es.object.get-own-property-descriptor-29fc8fcd.js";import"./iframe-e9cd31ad.js";import"./web.url.constructor-2b63018e.js";import"./es.number.is-integer-5e577c09.js";import"./make-decorator-fc329933.js";var s="anvnr10";const i=o(e=>n("input",{type:"text",...e,className:s}),"TextField"),r=c.memo(i);try{textfield.displayName="textfield",textfield.__docgenInfo={description:"",displayName:"textfield",props:{}}}catch{}const h={parameters:{storySource:{source:`import { action } from "@storybook/addon-actions";

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
`,locationsMap:{default:{startLoc:{col:40,line:18},endLoc:{col:1,line:20},startBody:{col:40,line:18},endBody:{col:1,line:20}}}}},title:"components/TextField",component:r,argTypes:{value:{control:"text"}}},p=o(e=>n(r,{...e,onClick:t("click"),onFocus:t("focus"),onBlur:t("blur"),onChange:t("change")}),"Template"),d=p.bind({});d.args={disabled:!1,readOnly:!1,placeholder:"placeholder"};const b=["Default"];export{d as Default,b as __namedExportsOrder,h as default};
//# sourceMappingURL=text-field.stories-f5e8dc8c.js.map
