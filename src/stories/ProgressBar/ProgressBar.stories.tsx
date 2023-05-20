import type { Meta, StoryObj } from "@storybook/react";
import ProgressBar  from "../../components/ProgressBar/ProgressBar";

const meta = {
  title: "ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HalfCompleted: Story = {
  args: {
    fillingWidth: "50%",
  },
};

export const QuarterCompleted: Story = {
  args: {
    fillingWidth: "25%",
  },
};