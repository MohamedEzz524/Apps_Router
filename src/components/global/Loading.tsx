import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const spinnerStyles = cva(
  'animate-spin rounded-full border-2 border-transparent',
  {
    variants: {
      size: {
        sm: 'h-8 w-8',
        md: 'h-12 w-12',
        lg: 'h-20 w-20',
      },
      variant: {
        primary: 'border-l-accentPrimary border-t-accentPrimary',
        secondary: 'border-l-gray-500 border-t-gray-500',
        neutral: 'border-l-white border-t-white',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'primary',
    },
  },
);

interface LoadingProps extends VariantProps<typeof spinnerStyles> {
  message?: string;
  fullScreen?: boolean;
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({
  size,
  variant = 'primary',
  message = 'Loading...',
  fullScreen = false,
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 p-5 ${
        fullScreen ? 'h-full w-full' : ''
      } ${className}`}
      role="status"
      aria-live="polite"
      aria-label={message}
    >
      <div className={spinnerStyles({ size, variant })} />
      {message && (
        <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
          {message}
        </p>
      )}
    </div>
  );
};

export default Loading;
