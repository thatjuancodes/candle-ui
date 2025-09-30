import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '../../test/test-utils';
import { Input } from './Input';

describe('Input', () => {
  it('renders correctly', () => {
    render(<Input placeholder="Test input" />);
    expect(screen.getByPlaceholderText('Test input')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Input label="Test Label" placeholder="Test input" />);
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('renders with helper text', () => {
    render(<Input helperText="This is helper text" placeholder="Test input" />);
    expect(screen.getByText('This is helper text')).toBeInTheDocument();
  });

  it('renders with error text', () => {
    render(<Input errorText="This is an error" placeholder="Test input" />);
    expect(screen.getByText('This is an error')).toBeInTheDocument();
  });

  it('prioritizes error text over helper text', () => {
    render(
      <Input
        helperText="Helper text"
        errorText="Error text"
        placeholder="Test input"
      />
    );
    expect(screen.getByText('Error text')).toBeInTheDocument();
    expect(screen.queryByText('Helper text')).not.toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Input size="sm" placeholder="Small" />);
    expect(screen.getByPlaceholderText('Small')).toHaveClass('text-sm', 'h-8');

    rerender(<Input size="md" placeholder="Medium" />);
    expect(screen.getByPlaceholderText('Medium')).toHaveClass(
      'text-base',
      'h-10'
    );

    rerender(<Input size="lg" placeholder="Large" />);
    expect(screen.getByPlaceholderText('Large')).toHaveClass('text-lg', 'h-12');
  });

  it('renders with different variants', () => {
    const { rerender } = render(
      <Input variant="default" placeholder="Default" />
    );
    expect(screen.getByPlaceholderText('Default')).toHaveClass('border-border');

    rerender(<Input variant="error" placeholder="Error" />);
    expect(screen.getByPlaceholderText('Error')).toHaveClass(
      'border-error-500'
    );

    rerender(<Input variant="success" placeholder="Success" />);
    expect(screen.getByPlaceholderText('Success')).toHaveClass(
      'border-success-500'
    );
  });

  it('applies error variant when errorText is provided', () => {
    render(<Input errorText="Error message" placeholder="Test input" />);
    expect(screen.getByPlaceholderText('Test input')).toHaveClass(
      'border-error-500'
    );
  });

  it('renders as full width when specified', () => {
    render(<Input fullWidth placeholder="Full width" />);
    expect(screen.getByPlaceholderText('Full width')).toHaveClass('w-full');
  });

  it('handles focus and blur events', () => {
    const handleFocus = vi.fn();
    const handleBlur = vi.fn();

    render(
      <Input
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Test input"
      />
    );

    const input = screen.getByPlaceholderText('Test input');
    fireEvent.focus(input);
    expect(handleFocus).toHaveBeenCalledTimes(1);

    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  it('handles change events', () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} placeholder="Test input" />);

    const input = screen.getByPlaceholderText('Test input');
    fireEvent.change(input, { target: { value: 'test value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    render(<Input disabled placeholder="Disabled input" />);
    expect(screen.getByPlaceholderText('Disabled input')).toBeDisabled();
  });

  it('renders with start icon', () => {
    const startIcon = <span data-testid="start-icon">🔍</span>;
    render(<Input startIcon={startIcon} placeholder="With start icon" />);

    expect(screen.getByTestId('start-icon')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('With start icon')).toHaveClass('pl-11');
  });

  it('renders with end icon', () => {
    const endIcon = <span data-testid="end-icon">✓</span>;
    render(<Input endIcon={endIcon} placeholder="With end icon" />);

    expect(screen.getByTestId('end-icon')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('With end icon')).toHaveClass('pr-11');
  });

  it('renders password toggle for password input', () => {
    render(<Input type="password" showPasswordToggle placeholder="Password" />);

    const toggleButton = screen.getByRole('button');
    expect(toggleButton).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toHaveAttribute(
      'type',
      'password'
    );
  });

  it('toggles password visibility', () => {
    render(<Input type="password" showPasswordToggle placeholder="Password" />);

    const input = screen.getByPlaceholderText('Password');
    const toggleButton = screen.getByRole('button');

    expect(input).toHaveAttribute('type', 'password');

    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute('type', 'text');

    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute('type', 'password');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Input ref={ref} placeholder="Input with ref" />);

    expect(ref).toHaveBeenCalledWith(expect.any(HTMLInputElement));
  });

  it('applies custom className', () => {
    render(<Input className="custom-class" placeholder="Custom input" />);
    expect(screen.getByPlaceholderText('Custom input')).toHaveClass(
      'custom-class'
    );
  });

  it('passes through additional props', () => {
    render(
      <Input
        data-testid="custom-input"
        aria-label="Custom input"
        placeholder="Test"
      />
    );

    const input = screen.getByTestId('custom-input');
    expect(input).toHaveAttribute('aria-label', 'Custom input');
  });

  it('has correct default props', () => {
    render(<Input placeholder="Default input" />);
    const input = screen.getByPlaceholderText('Default input');

    expect(input).toHaveClass('text-base', 'h-10'); // default size is 'md'
    expect(input).toHaveClass('border-border'); // default variant is 'default'
    expect(input).not.toHaveClass('w-full'); // default fullWidth is false
  });

  it('applies correct padding for icons based on size', () => {
    const icon = <span data-testid="icon">🔍</span>;

    const { rerender } = render(
      <Input size="sm" startIcon={icon} placeholder="Small with icon" />
    );
    expect(screen.getByPlaceholderText('Small with icon')).toHaveClass('pl-10');

    rerender(
      <Input size="md" startIcon={icon} placeholder="Medium with icon" />
    );
    expect(screen.getByPlaceholderText('Medium with icon')).toHaveClass(
      'pl-11'
    );

    rerender(
      <Input size="lg" startIcon={icon} placeholder="Large with icon" />
    );
    expect(screen.getByPlaceholderText('Large with icon')).toHaveClass('pl-12');
  });
});
