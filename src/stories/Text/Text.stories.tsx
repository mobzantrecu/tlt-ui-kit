import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../../components/Text";

const meta = {
  title: "Text",
  component: Text,
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AccentTitle: Story = {
  args: {
    children: "Explorá y encontrá eso que deseas",
    fontSize: "2rem",
    fontWeight: "bold",
    variant: "underline",
  },
};

export const LittleDetails: Story = {
  args: {
    children: "Un poco sobre nosotros",
    fontSize: "0.5rem",
    fontWeight: "medium",
  },
};

export const Title: Story = {
  args: {
    children: "Somos todas las tiendas",
    fontSize: "1.3rem",
    fontWeight: "bold",
  },
};

export const Subtitle: Story = {
  args: {
    children: "¿Cómo surgió?",
    fontSize: "1rem",
    fontWeight: "medium",
  },
};

export const LargeText: Story = {
  args: {
    children: "Te contamos un poco sobre nuestro proyecto.",
    fontSize: "0.7rem",
    fontWeight: "normal",
  },
};
