import { InputHTMLAttributes, forwardRef, useState } from 'react';
import classNames from 'classnames';
import { useTheme } from '../../theme/ThemeProvider';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * The size of the input
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * The visual state of the input
   */
  variant?: 'default' | 'error' | 'success';
  /**
   * Whether the input should take the full width of its container
   */
  fullWidth?: boolean;
  /**
   * Label text for the input
   */
  label?: string;
  /**
   * Helper text to display below the input
   */
  helperText?: string;
  /**
   * Error text to display below the input
   */
  errorText?: string;
  /**
   * Icon to display at the start of the input
   */
  startIcon?: React.ReactNode;
  /**
   * Icon to display at the end of the input
   */
  endIcon?: React.ReactNode;
  /**
   * Whether to show/hide password visibility toggle (only for type="password")
   */
  showPasswordToggle?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      variant = 'default',
      fullWidth = false,
      label,
      helperText,
      errorText,
      startIcon,
      endIcon,
      showPasswordToggle = false,
      type = 'text',
      className,
      disabled,
      ...props
    },
    ref
  ): JSX.Element => {
    const { theme } = useTheme();
    const [showPassword, setShowPassword] = useState(false);

    const inputType = type === 'password' && showPassword ? 'text' : type;
    const hasError = variant === 'error' || !!errorText;
    const hasSuccess = variant === 'success';

    const baseClasses = [
      'candle-ui-component',
      'transition-all',
      'duration-200',
      'border',
      'bg-input',
      'text-foreground',
      'placeholder-muted-foreground',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-offset-1',
      'disabled:opacity-50',
      'disabled:cursor-not-allowed',
      'disabled:bg-muted',
    ];

    const sizeClasses = {
      sm: ['text-sm', 'px-3', 'py-1.5', `rounded-${theme.radius.sm}`, 'h-8'],
      md: ['text-base', 'px-3', 'py-2', `rounded-${theme.radius.md}`, 'h-10'],
      lg: ['text-lg', 'px-4', 'py-3', `rounded-${theme.radius.md}`, 'h-12'],
    };

    const variantClasses = {
      default: [
        'border-border',
        'focus:border-primary-500',
        'focus:ring-primary-500',
      ],
      error: [
        'border-error-500',
        'focus:border-error-500',
        'focus:ring-error-500',
      ],
      success: [
        'border-success-500',
        'focus:border-success-500',
        'focus:ring-success-500',
      ],
    };

    const currentVariant = hasError
      ? 'error'
      : hasSuccess
        ? 'success'
        : 'default';
    const widthClasses = fullWidth ? ['w-full'] : [];

    const inputClasses = classNames(
      baseClasses,
      sizeClasses[size],
      variantClasses[currentVariant],
      widthClasses,
      {
        'pl-10': startIcon && size === 'sm',
        'pl-11': startIcon && size === 'md',
        'pl-12': startIcon && size === 'lg',
        'pr-10':
          (endIcon || (type === 'password' && showPasswordToggle)) &&
          size === 'sm',
        'pr-11':
          (endIcon || (type === 'password' && showPasswordToggle)) &&
          size === 'md',
        'pr-12':
          (endIcon || (type === 'password' && showPasswordToggle)) &&
          size === 'lg',
      },
      className
    );

    const iconSize = {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6',
    }[size];

    const iconPosition = {
      sm: { start: 'left-3', end: 'right-3' },
      md: { start: 'left-3', end: 'right-3' },
      lg: { start: 'left-4', end: 'right-4' },
    }[size];

    const containerClasses = classNames('relative', {
      'w-full': fullWidth,
    });

    const labelClasses = classNames('block text-sm font-medium mb-1', {
      'text-error-600': hasError,
      'text-success-600': hasSuccess,
      'text-foreground': !hasError && !hasSuccess,
    });

    const helperTextClasses = classNames('mt-1 text-xs', {
      'text-error-600': hasError,
      'text-success-600': hasSuccess,
      'text-muted-foreground': !hasError && !hasSuccess,
    });

    const displayedHelperText = errorText || helperText;

    const inputId =
      props.id || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className={containerClasses}>
        {label && (
          <label className={labelClasses} htmlFor={inputId}>
            {label}
          </label>
        )}

        <div className="relative">
          {startIcon && (
            <div
              className={classNames(
                'absolute top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none',
                iconPosition.start
              )}
            >
              <span className={iconSize}>{startIcon}</span>
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            type={inputType}
            className={inputClasses}
            disabled={disabled}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
            {...props}
          />

          {(endIcon || (type === 'password' && showPasswordToggle)) && (
            <div
              className={classNames(
                'absolute top-1/2 transform -translate-y-1/2',
                iconPosition.end
              )}
            >
              {type === 'password' && showPasswordToggle ? (
                <button
                  type="button"
                  className={classNames(
                    'text-muted-foreground hover:text-foreground transition-colors',
                    iconSize
                  )}
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                      />
                    </svg>
                  ) : (
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              ) : endIcon ? (
                <span className={classNames('text-muted-foreground', iconSize)}>
                  {endIcon}
                </span>
              ) : null}
            </div>
          )}
        </div>

        {displayedHelperText && (
          <p className={helperTextClasses}>{displayedHelperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
