import type { Meta, StoryObj } from '@storybook/react';
import { StatWidget } from './StatWidget';

const meta: Meta<typeof StatWidget> = {
  title: 'Components/StatWidget',
  component: StatWidget,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A stat widget component for displaying key metrics with optional icons and change indicators.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the stat widget',
    },
    value: {
      control: 'text',
      description: 'The main value to display',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size variant of the stat widget',
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error'],
      description: 'The color variant of the stat widget',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Total Revenue',
    value: '$45,231',
  },
};

export const WithIcon: Story = {
  args: {
    title: 'Active Users',
    value: '2,350',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
        />
      </svg>
    ),
  },
};

export const WithChange: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <StatWidget
        title="Sales"
        value="$12,426"
        change={{ value: '+20.1%', type: 'increase' }}
        icon={
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
            />
          </svg>
        }
      />
      <StatWidget
        title="Orders"
        value="1,426"
        change={{ value: '-5.4%', type: 'decrease' }}
        icon={
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        }
      />
      <StatWidget
        title="Conversion"
        value="3.2%"
        change={{ value: '0.0%', type: 'neutral' }}
        icon={
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        }
      />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <StatWidget
        size="sm"
        title="Small Widget"
        value="1,234"
        change={{ value: '+12%', type: 'increase' }}
      />
      <StatWidget
        size="md"
        title="Medium Widget"
        value="5,678"
        change={{ value: '+8%', type: 'increase' }}
      />
      <StatWidget
        size="lg"
        title="Large Widget"
        value="9,012"
        change={{ value: '+15%', type: 'increase' }}
      />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <StatWidget
        variant="default"
        title="Default"
        value="1,234"
        icon={
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        }
      />
      <StatWidget
        variant="primary"
        title="Primary"
        value="2,345"
        icon={
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
        }
      />
      <StatWidget
        variant="success"
        title="Success"
        value="3,456"
        change={{ value: '+25%', type: 'increase' }}
        icon={
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        }
      />
      <StatWidget
        variant="error"
        title="Error"
        value="456"
        change={{ value: '-10%', type: 'decrease' }}
        icon={
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        }
      />
    </div>
  ),
};

export const Dashboard: Story = {
  render: () => (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl">
      <StatWidget
        title="Total Revenue"
        value="$45,231.89"
        change={{ value: '+20.1%', type: 'increase' }}
        variant="primary"
        icon={
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
            />
          </svg>
        }
      />
      <StatWidget
        title="Subscriptions"
        value="+2350"
        change={{ value: '+180.1%', type: 'increase' }}
        variant="success"
        icon={
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
            />
          </svg>
        }
      />
      <StatWidget
        title="Sales"
        value="+12,234"
        change={{ value: '+19%', type: 'increase' }}
        icon={
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
            />
          </svg>
        }
      />
      <StatWidget
        title="Active Now"
        value="+573"
        change={{ value: '+201', type: 'increase' }}
        icon={
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        }
      />
    </div>
  ),
};
