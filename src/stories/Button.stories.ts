import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components';

const meta: Meta<typeof Button> = {
  component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

export const One: Story = {
  args: {
    buttonText: '11111'
  }
};

export const Two: Story = {
  args: {
    buttonText: '22222'
  }
};

export const Coloring: Story = {
  args: {
    buttonText: '33333',
    color: 'blue'
  }
};

export const Empty: Story = {
  args: {
    buttonText: ''
  }
};
