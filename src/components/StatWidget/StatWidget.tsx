import { HTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';
import { useTheme } from '../../theme/ThemeProvider';

export interface StatWidgetProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The title of the stat widget
   */
  title: string;
  /**
   * The main value to display
   */
  value: string | number;
  /**
   * Optional icon to display
   */
  icon?: React.ReactNode;
  /**
   * Optional change indicator (positive/negative)
   */
  change?: {
    value: string | number;
    type: 'increase' | 'decrease' | 'neutral';
  };
  /**
   * The size variant of the stat widget
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * The color variant of the stat widget
   */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
}

const StatWidget = forwardRef<HTMLDivElement, StatWidgetProps>(
  (
    {
      title,
      value,
      icon,
      change,
      size = 'md',
      variant = 'default',
      className,
      ...props
    },
    ref
  ): JSX.Element => {
    const { theme } = useTheme();

    const baseClasses = [
      'candle-ui-component',
      'bg-background',
      'border',
      'border-border',
      `rounded-${theme.radius.lg}`,
      'transition-all',
      'duration-200',
    ];

    const sizeClasses = {
      sm: ['p-4'],
      md: ['p-6'],
      lg: ['p-8'],
    };

    const variantClasses = {
      default: ['hover:border-secondary-300'],
      primary: [
        'border-primary-200',
        'bg-primary-50',
        'hover:border-primary-300',
      ],
      success: [
        'border-success-200',
        'bg-success-50',
        'hover:border-success-300',
      ],
      warning: [
        'border-warning-200',
        'bg-warning-50',
        'hover:border-warning-300',
      ],
      error: ['border-error-200', 'bg-error-50', 'hover:border-error-300'],
    };

    const titleClasses = {
      sm: ['text-sm'],
      md: ['text-base'],
      lg: ['text-lg'],
    };

    const valueClasses = {
      sm: ['text-xl', 'font-semibold'],
      md: ['text-2xl', 'font-bold'],
      lg: ['text-3xl', 'font-bold'],
    };

    const iconSize = {
      sm: 'w-5 h-5',
      md: 'w-6 h-6',
      lg: 'w-8 h-8',
    }[size];

    const changeClasses = {
      increase: 'text-success-600',
      decrease: 'text-error-600',
      neutral: 'text-muted-foreground',
    };

    const changeIcon = {
      increase: (
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 17l9.2-9.2M17 17V7H7"
          />
        </svg>
      ),
      decrease: (
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 7l-9.2 9.2M7 7v10h10"
          />
        </svg>
      ),
      neutral: null,
    };

    const widgetClasses = classNames(
      baseClasses,
      sizeClasses[size],
      variantClasses[variant],
      className
    );

    return (
      <div
        ref={ref}
        className={widgetClasses}
        data-testid="stat-widget"
        {...props}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p
              className={classNames(
                'text-muted-foreground font-medium',
                titleClasses[size]
              )}
            >
              {title}
            </p>
            <p
              className={classNames('text-foreground mt-1', valueClasses[size])}
            >
              {value}
            </p>
            {change && (
              <div
                className={classNames(
                  'flex items-center mt-2 text-sm',
                  changeClasses[change.type]
                )}
              >
                {changeIcon[change.type]}
                <span className="ml-1">{change.value}</span>
              </div>
            )}
          </div>
          {icon && (
            <div
              className={classNames(
                'flex-shrink-0 text-muted-foreground',
                iconSize
              )}
            >
              {icon}
            </div>
          )}
        </div>
      </div>
    );
  }
);

StatWidget.displayName = 'StatWidget';

export { StatWidget };
