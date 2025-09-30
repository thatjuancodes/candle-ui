import { HTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';
import { useTheme } from '../../theme/ThemeProvider';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The visual style variant of the card
   */
  variant?: 'default' | 'outlined' | 'elevated' | 'filled';
  /**
   * The padding size of the card
   */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Whether the card should be interactive (hover effects)
   */
  interactive?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      padding = 'md',
      interactive = false,
      children,
      className,
      ...props
    },
    ref
  ): JSX.Element => {
    const { theme } = useTheme();

    const baseClasses = [
      'candle-ui-component',
      'transition-all',
      'duration-200',
      `rounded-${theme.radius.lg}`,
    ];

    const variantClasses = {
      default: ['bg-background', 'border', 'border-border'],
      outlined: ['bg-background', 'border-2', 'border-border'],
      elevated: ['bg-background', 'border', 'border-border', 'shadow-medium'],
      filled: ['bg-muted', 'border', 'border-transparent'],
    };

    const paddingClasses = {
      none: [],
      sm: ['p-3'],
      md: ['p-4'],
      lg: ['p-6'],
      xl: ['p-8'],
    };

    const interactiveClasses = interactive
      ? [
          'cursor-pointer',
          'hover:shadow-medium',
          'hover:border-primary-300',
          'focus:outline-none',
          'focus:ring-2',
          'focus:ring-primary-500',
          'focus:ring-offset-2',
          'active:scale-[0.98]',
        ]
      : [];

    const cardClasses = classNames(
      baseClasses,
      variantClasses[variant],
      paddingClasses[padding],
      interactiveClasses,
      className
    );

    return (
      <div
        ref={ref}
        className={cardClasses}
        tabIndex={interactive ? 0 : undefined}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export { Card };
