import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '../../test/test-utils';
import { Card } from './Card';

describe('Card', () => {
  it('renders correctly', () => {
    render(<Card>Test Card Content</Card>);
    expect(screen.getByText('Test Card Content')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Card variant="default">Default</Card>);
    expect(screen.getByText('Default')).toHaveClass('bg-background', 'border');

    rerender(<Card variant="outlined">Outlined</Card>);
    expect(screen.getByText('Outlined')).toHaveClass('border-2');

    rerender(<Card variant="elevated">Elevated</Card>);
    expect(screen.getByText('Elevated')).toHaveClass('shadow-medium');

    rerender(<Card variant="filled">Filled</Card>);
    expect(screen.getByText('Filled')).toHaveClass('bg-muted');
  });

  it('renders with different padding sizes', () => {
    const { rerender } = render(<Card padding="none">No padding</Card>);
    expect(screen.getByText('No padding').parentElement).not.toHaveClass(
      'p-3',
      'p-4',
      'p-6',
      'p-8'
    );

    rerender(<Card padding="sm">Small padding</Card>);
    expect(screen.getByText('Small padding')).toHaveClass('p-3');

    rerender(<Card padding="md">Medium padding</Card>);
    expect(screen.getByText('Medium padding')).toHaveClass('p-4');

    rerender(<Card padding="lg">Large padding</Card>);
    expect(screen.getByText('Large padding')).toHaveClass('p-6');

    rerender(<Card padding="xl">Extra large padding</Card>);
    expect(screen.getByText('Extra large padding')).toHaveClass('p-8');
  });

  it('applies interactive styles when interactive is true', () => {
    render(<Card interactive>Interactive Card</Card>);
    const card = screen.getByText('Interactive Card');

    expect(card).toHaveClass('cursor-pointer');
    expect(card).toHaveAttribute('tabIndex', '0');
  });

  it('does not apply interactive styles when interactive is false', () => {
    render(<Card interactive={false}>Static Card</Card>);
    const card = screen.getByText('Static Card');

    expect(card).not.toHaveClass('cursor-pointer');
    expect(card).not.toHaveAttribute('tabIndex');
  });

  it('handles click events when interactive', () => {
    const handleClick = vi.fn();
    render(
      <Card interactive onClick={handleClick}>
        Clickable Card
      </Card>
    );

    fireEvent.click(screen.getByText('Clickable Card'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('handles keyboard events when interactive', () => {
    const handleKeyDown = vi.fn();
    render(
      <Card interactive onKeyDown={handleKeyDown}>
        Keyboard Card
      </Card>
    );

    const card = screen.getByText('Keyboard Card');
    fireEvent.keyDown(card, { key: 'Enter' });
    expect(handleKeyDown).toHaveBeenCalledTimes(1);
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Card ref={ref}>Card with ref</Card>);

    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it('applies custom className', () => {
    render(<Card className="custom-class">Custom Card</Card>);
    expect(screen.getByText('Custom Card')).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    render(
      <Card data-testid="custom-card" aria-label="Custom card">
        Card
      </Card>
    );

    const card = screen.getByTestId('custom-card');
    expect(card).toHaveAttribute('aria-label', 'Custom card');
  });

  it('renders children correctly', () => {
    render(
      <Card>
        <h2>Card Title</h2>
        <p>Card content</p>
      </Card>
    );

    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('has correct default props', () => {
    render(<Card>Default Card</Card>);
    const card = screen.getByText('Default Card');

    expect(card).toHaveClass('p-4'); // default padding is 'md'
    expect(card).not.toHaveClass('cursor-pointer'); // default interactive is false
  });
});
