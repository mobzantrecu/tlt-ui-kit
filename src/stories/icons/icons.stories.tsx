import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "../../components/Icon";

const meta = {
  title: "Icon",
  component: Icon,
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ArrowIcon: Story = {
  args: {
    icon: "arrows",
    size: "m",
  },
};

export const EyeIcon: Story = {
  args: {
    icon: "eyes",
    size: "m",
  },
};

export const FingerIcon: Story = {
  args: {
    icon: "finger",
    size: "m",
  },
};

export const OpenBoxIcon: Story = {
  args: {
    icon: "open-box",
    size: "m",
  },
};

export const FireIcon: Story = {
  args: {
    icon: "fire",
    size: "m",
  },
};

export const RecycleIcon: Story = {
  args: {
    icon: "recycle",
    size: "m",
  },
};

export const ThunderIcon: Story = {
  args: {
    icon: "thunder",
    size: "m",
  },
};

export const UmbrellaIcon: Story = {
  args: {
    icon: "umbrella",
    size: "m",
  },
};

export const WarningIcon: Story = {
  args: {
    icon: "warning",
    size: "m",
  },
};

export const WorldIcon: Story = {
  args: {
    icon: "world",
    size: "m",
  },
};
