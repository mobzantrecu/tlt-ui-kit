import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../components/Card";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import React from "react";

const meta = {
  title: "Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const ExampleOne = () => {
  return (
    <div>
      <Text fontSize={"2rem"} fontWeight="bold" variant="underline">
        Explorá y encontrá eso que deseas
      </Text>
      <Text renderAs="p" fontSize={"0.5rem"} fontWeight="medium">
        Un poco sobre nosotros
      </Text>
      <Text renderAs="h3" fontSize={"1.3rem"} fontWeight="bold">
        Somos todas las tiendas
      </Text>
      <Text renderAs="p" fontSize={"1rem"} fontWeight="medium">
        ¿Cómo surgió?
      </Text>
      <Text fontSize={"0.7rem"} fontWeight="normal">
        Te contamos un poco sobre nuestro proyecto.
      </Text>
    </div>
  );
};

const ExampleTwo = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 30
      }}
    >
      <Card borderVariant="transparent" backgroundVariant="primary-white">
        <div style={{display:'flex', justifyContent:'center'}}>
          <img src="/images/exampleImg.png" alt="example-img" height={200} />
        </div>
      </Card>
      <Button onClick={() => null} type="primary">
        texto ejemplo
      </Button>
    </div>
  );
};

export const CardWithText: Story = {
  args: {
    children: <ExampleOne />,
    backgroundVariant: "secondary-grey",
    borderVariant: "primary-black",
  },
};

export const MultipleCard: Story = {
  args: {
    children: <ExampleTwo />,
    backgroundVariant: "secondary-grey",
    borderVariant: "transparent",
  },
};
