import type { Meta, StoryObj } from "@storybook/react";
import Radio  from "../../components/Radio/Radio";

const meta = {
  title: "Radio",
  component: Radio,
  tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: {
    isChecked: false,
    onChange: () => null,
    label: 'Unchecked'
  },
};

export const Checked: Story = {
  args: {
    isChecked: true,
    onChange: () => null,
    label: 'Checked'
  },
};

export const DisabledUnchecked: Story = {
  args: {
    disabled: true,
    isChecked: false,
    onChange: () => null,
    label: 'Disabled Unchecked'
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    isChecked: true,
    onChange: () => null,
    label: 'Disabled Checked'
  },
};