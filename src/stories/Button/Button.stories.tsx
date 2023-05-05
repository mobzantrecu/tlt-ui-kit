import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../components/Button";
import React from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const TextExample = () => <span>texto botón</span>;
const IconExample = () => (
  <img
    src="https://cdn.iconscout.com/icon/free/png-512/free-bell-477-457810.png?f=avif&w=512"
    height={35}
    width={35}
    alt="button-icon"
  />
);

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    onClick: () => null,
    modifier: "default",
    type: "primary",
    children: <TextExample />,
  },
};

export const Outline: Story = {
  args: {
    onClick: () => null,
    modifier: "outline",
    type: "primary",
    children: <TextExample />,
  },
};

export const Tertiary: Story = {
  args: {
    onClick: () => null,
    modifier: "tertiary",
    type: "primary",
    children: <TextExample />,
  },
};

export const OnlyText: Story = {
  args: {
    onClick: () => null,
    type: "only-text",
    children: <TextExample />,
  },
};

export const WithArrowIcon: Story = {
  args: {
    onClick: () => null,
    type: "with-arrow",
    modifier: "outline",
    children: <TextExample />,
  },
};

export const OnlyIcon: Story = {
  args: {
    onClick: () => null,
    type: "only-icon",
    children: <IconExample />,
  },
};

export const OnlyIconOutline: Story = {
  args: {
    onClick: () => null,
    type: "only-icon",
    modifier: "outline",
    children: <IconExample />,
  },
};

// https://cdn.iconscout.com/icon/free/png-512/free-bell-477-457810.png?f=avif&w=512
