import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible input component with various sizes, states, and features like icons and validation.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the input',
    },
    variant: {
      control: 'select',
      options: ['default', 'error', 'success'],
      description: 'The visual state of the input',
    },
    fullWidth: {
      control: 'boolean',
      description:
        'Whether the input should take the full width of its container',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    label: {
      control: 'text',
      description: 'Label text for the input',
    },
    helperText: {
      control: 'text',
      description: 'Helper text to display below the input',
    },
    errorText: {
      control: 'text',
      description: 'Error text to display below the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input',
    },
    showPasswordToggle: {
      control: 'boolean',
      description:
        'Whether to show/hide password visibility toggle (only for type="password")',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input size="sm" placeholder="Small input" label="Small" />
      <Input size="md" placeholder="Medium input" label="Medium" />
      <Input size="lg" placeholder="Large input" label="Large" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input variant="default" placeholder="Default input" label="Default" />
      <Input variant="success" placeholder="Success input" label="Success" />
      <Input variant="error" placeholder="Error input" label="Error" />
    </div>
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input
        label="Username"
        placeholder="Enter username"
        helperText="Must be at least 3 characters long"
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter password"
        errorText="Password is required"
        variant="error"
      />
      <Input
        label="Confirmation"
        type="password"
        placeholder="Confirm password"
        helperText="Passwords match!"
        variant="success"
      />
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input
        label="Search"
        placeholder="Search..."
        startIcon={
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        }
      />
      <Input
        label="Email"
        type="email"
        placeholder="Enter email"
        startIcon={
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
        }
        endIcon={
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
    </div>
  ),
};

export const PasswordInput: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input
        label="Password"
        type="password"
        placeholder="Enter password"
        showPasswordToggle
      />
      <Input
        label="Confirm Password"
        type="password"
        placeholder="Confirm password"
        showPasswordToggle
        helperText="Click the eye icon to toggle visibility"
      />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input label="Normal" placeholder="Normal input" />
      <Input label="Disabled" placeholder="Disabled input" disabled />
      <Input
        label="Read Only"
        placeholder="Read only input"
        readOnly
        value="Read only value"
      />
      <Input label="Required" placeholder="Required input" required />
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <Input
        fullWidth
        label="Full Width Input"
        placeholder="This input takes the full width"
        helperText="This input spans the entire container width"
      />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <form className="space-y-4 w-80">
      <Input label="First Name" placeholder="Enter first name" required />
      <Input label="Last Name" placeholder="Enter last name" required />
      <Input
        label="Email"
        type="email"
        placeholder="Enter email"
        required
        startIcon={
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
        }
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter password"
        required
        showPasswordToggle
        helperText="Must be at least 8 characters"
      />
    </form>
  ),
};
