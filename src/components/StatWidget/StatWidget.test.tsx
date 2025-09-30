import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '../../test/test-utils';
import { StatWidget } from './StatWidget';

describe('StatWidget', () => {
  it('renders correctly with title and value', () => {
    render(<StatWidget title="Test Title" value="1,234" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('1,234')).toBeInTheDocument();
  });

  it('renders with icon', () => {
    const icon = <span data-testid="test-icon">📊</span>;
    render(<StatWidget title="With Icon" value="5,678" icon={icon} />);

    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('renders with change indicator', () => {
    render(
      <StatWidget
        title="With Change"
        value="9,012"
        change={{ value: '+20%', type: 'increase' }}
      />
    );

    expect(screen.getByText('+20%')).toBeInTheDocument();
  });

  it('applies correct change type styles', () => {
    const { rerender } = render(
      <StatWidget
        title="Increase"
        value="100"
        change={{ value: '+10%', type: 'increase' }}
      />
    );
    expect(screen.getByText('+10%').parentElement).toHaveClass(
      'text-success-600'
    );

    rerender(
      <StatWidget
        title="Decrease"
        value="100"
        change={{ value: '-5%', type: 'decrease' }}
      />
    );
    expect(screen.getByText('-5%').parentElement).toHaveClass('text-error-600');

    rerender(
      <StatWidget
        title="Neutral"
        value="100"
        change={{ value: '0%', type: 'neutral' }}
      />
    );
    expect(screen.getByText('0%').parentElement).toHaveClass(
      'text-muted-foreground'
    );
  });

  it('renders with different sizes', () => {
    const { rerender } = render(
      <StatWidget title="Small" value="123" size="sm" />
    );
    expect(screen.getByText('Small')).toHaveClass('text-sm');
    expect(screen.getByText('123')).toHaveClass('text-xl');

    rerender(<StatWidget title="Medium" value="456" size="md" />);
    expect(screen.getByText('Medium')).toHaveClass('text-base');
    expect(screen.getByText('456')).toHaveClass('text-2xl');

    rerender(<StatWidget title="Large" value="789" size="lg" />);
    expect(screen.getByText('Large')).toHaveClass('text-lg');
    expect(screen.getByText('789')).toHaveClass('text-3xl');
  });

  it('renders with different variants', () => {
    const { rerender } = render(
      <StatWidget title="Default" value="123" variant="default" />
    );
    let widget = screen.getByTestId('stat-widget');
    expect(widget).toHaveClass('hover:border-secondary-300');

    rerender(<StatWidget title="Primary" value="456" variant="primary" />);
    widget = screen.getByTestId('stat-widget');
    expect(widget).toHaveClass('border-primary-200', 'bg-primary-50');

    rerender(<StatWidget title="Success" value="789" variant="success" />);
    widget = screen.getByTestId('stat-widget');
    expect(widget).toHaveClass('border-success-200', 'bg-success-50');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<StatWidget ref={ref} title="Ref Test" value="123" />);

    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it('applies custom className', () => {
    render(<StatWidget className="custom-class" title="Custom" value="123" />);
    const widget = screen.getByTestId('stat-widget');
    expect(widget).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    render(
      <StatWidget data-testid="custom-widget" title="Props Test" value="123" />
    );

    const widget = screen.getByTestId('custom-widget');
    expect(widget).toBeInTheDocument();
  });

  it('handles numeric values', () => {
    render(<StatWidget title="Numeric" value={12345} />);
    expect(screen.getByText('12345')).toBeInTheDocument();
  });

  it('handles numeric change values', () => {
    render(
      <StatWidget
        title="Numeric Change"
        value="100"
        change={{ value: 25, type: 'increase' }}
      />
    );
    expect(screen.getByText('25')).toBeInTheDocument();
  });

  it('has correct default props', () => {
    render(<StatWidget title="Default Props" value="123" />);
    const widget = screen.getByTestId('stat-widget');

    expect(widget).toHaveClass('p-6'); // default size is 'md'
    expect(widget).toHaveClass('hover:border-secondary-300'); // default variant is 'default'
  });

  it('renders without change indicator when not provided', () => {
    render(<StatWidget title="No Change" value="123" />);

    // Should not have any change-related elements
    expect(screen.queryByText('+')).not.toBeInTheDocument();
    expect(screen.queryByText('-')).not.toBeInTheDocument();
    expect(screen.queryByText('%')).not.toBeInTheDocument();
  });

  it('renders without icon when not provided', () => {
    render(<StatWidget title="No Icon" value="123" />);

    // Should only have the main flex container, no icon
    const widget = screen.getByTestId('stat-widget');
    const flexContainer = widget.querySelector(
      '.flex.items-start.justify-between'
    );
    expect(flexContainer?.children).toHaveLength(1); // Only the content div, no icon div
  });
});
