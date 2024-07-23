"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

const DropdownComponent = ({ ...props }: any) => {
  <Dropdown {...props} />;
};
const DropdownToggleComponent = ({ ...props }) => {
  <DropdownToggle {...props} />;
};
const DropdownMenuComponent = ({ ...props }) => {
  <DropdownMenu {...props} />;
};
const DropdownItemComponent = ({ ...props }) => {
  <DropdownItem {...props} />;
};
export {
  DropdownComponent,
  DropdownToggleComponent,
  DropdownMenuComponent,
  DropdownItemComponent,
};
