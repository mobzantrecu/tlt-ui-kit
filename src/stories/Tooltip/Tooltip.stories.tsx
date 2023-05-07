import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "../../components/Tooltip";
import React from "react";

const meta = {
  title: "Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Green: Story = {
  args: {
    children: <span style={{ fontSize: "0.7rem" }}>contenido textual</span>,
  },
};

export const Black: Story = {
  args: {
    textVariant: "primary-white",
    backgroundVariant: "primary-black",
    children: <span style={{ fontSize: "0.7rem" }}>contenido textual</span>,
  },
};

export const Greenish: Story = {
  args: {
    textVariant: "primary-black",
    backgroundVariant: "success-green",
    children: <span style={{ fontSize: "0.7rem" }}>contenido textual</span>,
  },
};