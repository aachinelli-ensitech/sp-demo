import Button from './Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
    title: "components/Button",
    component: Button,
    args: {
        label: "Button",
    }
  };

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
      label: "Primary",
      type: "primary"
    },
};

export const Secondary: Story = {
    args: {
      label: "Secondary",
      type: "secondary"
    },
};

export const Tertiary : Story = {
    args: {
      label: "Tertiary ",
      type: "tertiary"
    },
};