import type { Meta, StoryObj } from "@storybook/react";
import Input from "../../components/Input/Input";
import "../../main.css";
import React from "react";

const meta = {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const IconExample = () => (
  <img
    src="https://cdn.iconscout.com/icon/free/png-512/free-bell-477-457810.png?f=avif&w=512"
    height={35}
    width={35}
    alt="button-icon"
  />
);

export const Default: Story = {
  args: {
    handleChange: () => "",
    placeholder:'Placeholder'
  },
};

export const WithRightChildren: Story = {
  args: {
    handleChange: () => "",
    iconElement: <IconExample/>,
    placeholder:'Placeholder'

  },
};