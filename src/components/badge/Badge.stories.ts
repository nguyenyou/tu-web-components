import type { Meta, StoryObj } from '@storybook/web-components-vite';
import './badge.js';
import { html } from 'lit';

const meta: Meta = {
    component: 'tu-badge',
    tags: ['autodocs'],
  };
  
  export default meta;
  
  type Story = StoryObj;
  
  export const Default: Story = {
    render: () => html`<tu-badge>Badge</tu-badge>`,
  };