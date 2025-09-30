import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible card component for displaying content in a contained, elevated surface.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated', 'filled'],
      description: 'The visual style variant of the card',
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
      description: 'The padding size of the card',
    },
    interactive: {
      control: 'boolean',
      description: 'Whether the card should be interactive (hover effects)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Card Title</h3>
        <p className="text-muted-foreground">
          This is a basic card with some content inside it.
        </p>
      </div>
    ),
  },
};

export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-96">
      <Card variant="default">
        <h4 className="font-medium mb-2">Default</h4>
        <p className="text-sm text-muted-foreground">Basic card style</p>
      </Card>
      <Card variant="outlined">
        <h4 className="font-medium mb-2">Outlined</h4>
        <p className="text-sm text-muted-foreground">Card with thick border</p>
      </Card>
      <Card variant="elevated">
        <h4 className="font-medium mb-2">Elevated</h4>
        <p className="text-sm text-muted-foreground">Card with shadow</p>
      </Card>
      <Card variant="filled">
        <h4 className="font-medium mb-2">Filled</h4>
        <p className="text-sm text-muted-foreground">Card with background</p>
      </Card>
    </div>
  ),
};

export const Padding: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Card padding="none">
        <div className="p-2 bg-primary-100 rounded">
          <p className="text-sm">No padding</p>
        </div>
      </Card>
      <Card padding="sm">
        <p className="text-sm">Small padding</p>
      </Card>
      <Card padding="md">
        <p className="text-sm">Medium padding (default)</p>
      </Card>
      <Card padding="lg">
        <p className="text-sm">Large padding</p>
      </Card>
      <Card padding="xl">
        <p className="text-sm">Extra large padding</p>
      </Card>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-96">
      <Card>
        <h4 className="font-medium mb-2">Static Card</h4>
        <p className="text-sm text-muted-foreground">
          This card is not interactive
        </p>
      </Card>
      <Card interactive onClick={() => alert('Card clicked!')}>
        <h4 className="font-medium mb-2">Interactive Card</h4>
        <p className="text-sm text-muted-foreground">
          Click me! I have hover effects
        </p>
      </Card>
    </div>
  ),
};

export const WithComplexContent: Story = {
  render: () => (
    <Card className="w-80">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-primary-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold">John Doe</h3>
          <p className="text-muted-foreground text-sm mb-2">
            Software Engineer
          </p>
          <p className="text-sm">
            Passionate about creating beautiful and functional user interfaces.
          </p>
          <div className="flex space-x-2 mt-4">
            <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full">
              React
            </span>
            <span className="px-2 py-1 bg-success-100 text-success-800 text-xs rounded-full">
              TypeScript
            </span>
          </div>
        </div>
      </div>
    </Card>
  ),
};

export const CardGrid: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 w-full max-w-4xl">
      {Array.from({ length: 6 }, (_, i) => (
        <Card key={i} variant="elevated" interactive>
          <h4 className="font-medium mb-2">Card {i + 1}</h4>
          <p className="text-sm text-muted-foreground">
            This is card number {i + 1} in the grid.
          </p>
        </Card>
      ))}
    </div>
  ),
};
