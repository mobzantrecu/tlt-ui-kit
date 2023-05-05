import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "../../components/Tag";

const meta = {
  title: "Tag",
  component: Tag,
  tags: ["autodocs"],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultTagWithoutIcons: Story = {
  args: {
    children: "etiqueta",
    modifier: "default",
  },
};

export const DefaultTagLeftIcon: Story = {
  args: {
    children: "etiqueta",
    modifier: "default",
    leftIcon: "icon",
  },
};

export const DefaultTagRightIcon: Story = {
  args: {
    children: "etiqueta",
    modifier: "default",
    closable: true,
    onClose: () => alert("Close"),
  },
};

export const TagWithIcons: Story = {
  args: {
    children: "etiqueta",
    modifier: "default",
    leftIcon: "I",
    closable: true,
    onClose: () => alert("Close"),
  },
};
