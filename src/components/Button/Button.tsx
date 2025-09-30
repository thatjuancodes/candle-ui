import { ButtonHTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The visual style variant of the button
   */
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | 'ghost'
    | 'outline';
  /**
   * The size of the button
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Whether the button should take the full width of its container
   */
  fullWidth?: boolean;
  /**
   * Whether the button is in a loading state
   */
  loading?: boolean;
  /**
   * Icon to display before the button text
   */
  leftIcon?: React.ReactNode;
  /**
   * Icon to display after the button text
   */
  rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      leftIcon,
      rightIcon,
      children,
      className,
      disabled,
      ...props
    },
    ref
  ): JSX.Element => {
    const baseClasses = [
      'candle-ui-component',
      'inline-flex',
      'items-center',
      'justify-center',
      'font-medium',
      'transition-all',
      'duration-200',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-offset-2',
      'disabled:opacity-50',
      'disabled:cursor-not-allowed',
      'disabled:pointer-events-none',
    ];

    const sizeClasses = {
      xs: ['text-xs', 'px-2', 'py-1', 'gap-1', 'rounded-[5px]'],
      sm: ['text-sm', 'px-3', 'py-1.5', 'gap-1.5', 'rounded-[5px]'],
      md: ['text-base', 'px-4', 'py-2', 'gap-2', 'rounded-[5px]'],
      lg: ['text-lg', 'px-6', 'py-3', 'gap-2', 'rounded-[5px]'],
      xl: ['text-xl', 'px-8', 'py-4', 'gap-3', 'rounded-[5px]'],
    };

    const variantClasses = {
      primary: [
        'bg-primary-600',
        'text-white',
        'hover:bg-primary-700',
        'focus:ring-primary-500',
        'active:bg-primary-800',
      ],
      secondary: [
        'bg-secondary-100',
        'text-secondary-900',
        'hover:bg-secondary-200',
        'focus:ring-secondary-500',
        'active:bg-secondary-300',
        'dark:bg-secondary-800',
        'dark:text-secondary-100',
        'dark:hover:bg-secondary-700',
        'dark:active:bg-secondary-600',
      ],
      success: [
        'bg-success-600',
        'text-white',
        'hover:bg-success-700',
        'focus:ring-success-500',
        'active:bg-success-800',
      ],
      warning: [
        'bg-warning-600',
        'text-white',
        'hover:bg-warning-700',
        'focus:ring-warning-500',
        'active:bg-warning-800',
      ],
      error: [
        'bg-error-600',
        'text-white',
        'hover:bg-error-700',
        'focus:ring-error-500',
        'active:bg-error-800',
      ],
      ghost: [
        'bg-transparent',
        'text-secondary-700',
        'hover:bg-secondary-100',
        'focus:ring-secondary-500',
        'active:bg-secondary-200',
        'dark:text-secondary-300',
        'dark:hover:bg-secondary-800',
        'dark:active:bg-secondary-700',
      ],
      outline: [
        'bg-transparent',
        'border',
        'border-secondary-300',
        'text-secondary-700',
        'hover:bg-secondary-50',
        'focus:ring-secondary-500',
        'active:bg-secondary-100',
        'dark:border-secondary-600',
        'dark:text-secondary-300',
        'dark:hover:bg-secondary-800',
        'dark:active:bg-secondary-700',
      ],
    };

    const widthClasses = fullWidth ? ['w-full'] : [];

    const loadingClasses = loading ? ['cursor-wait'] : [];

    const buttonClasses = classNames(
      baseClasses,
      sizeClasses[size],
      variantClasses[variant],
      widthClasses,
      loadingClasses,
      className
    );

    const iconSize = {
      xs: 'w-3 h-3',
      sm: 'w-4 h-4',
      md: 'w-4 h-4',
      lg: 'w-5 h-5',
      xl: 'w-6 h-6',
    }[size];

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className={classNames('animate-spin', iconSize)}
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!loading && leftIcon && <span className={iconSize}>{leftIcon}</span>}
        {children}
        {!loading && rightIcon && <span className={iconSize}>{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
