import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import { html } from 'lit';

import type { AwcButton } from './button.js';

const { events, args, argTypes, template } = getStorybookHelpers('awc-button');

const meta: Meta<AwcButton> = {
  title: 'Components/Button',
  component: 'awc-button',
  args,
  argTypes,
  parameters: {
    actions: {
      handles: events,
    },
  },
};
export default meta;

/**
 * create Story type that will provide autocomplete and docs for `args`,
 * but also allow for namespaced args like CSS Shadow Parts and Slots
 */
type Story = StoryObj<AwcButton & typeof args>;

export const Default: Story = {
  render: args => html`${template(args)}`,
  args: {
    'default-slot': 'Awc Button',
  },
};
