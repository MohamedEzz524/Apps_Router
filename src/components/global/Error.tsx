import React from 'react';
import { MdErrorOutline } from 'react-icons/md';
import { cva, type VariantProps } from 'class-variance-authority';

const errorContainerStyles = cva(
  'flex flex-col items-center justify-center gap-4 p-6 rounded-lg',
  {
    variants: {
      variant: {
        primary: 'bg-red-50 dark:bg-red-900/20',
        secondary: 'bg-gray-50 dark:bg-gray-800',
        neutral: 'bg-white dark:bg-gray-900',
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

interface ErrorProps extends VariantProps<typeof errorContainerStyles> {
  title: string;
  message?: string;
  onRetry?: () => void;
  fullScreen?: boolean;
  className?: string;
}

const Error: React.FC<ErrorProps> = ({
  variant = 'primary',
  size,
  title,
  message,
  onRetry,
  fullScreen = false,
  className = '',
}) => {
  return (
    <div
      className={`m-auto grow ${errorContainerStyles({ variant, size })} ${
        fullScreen ? 'h-full w-full' : ''
      } ${className}`}
      role="alert"
      aria-live="assertive"
    >
      <div className="flex flex-col items-center text-center">
        <MdErrorOutline
          className={`h-12 w-12 ${variant === 'primary' ? 'text-red-500' : variant === 'secondary' ? 'text-gray-500' : 'text-gray-700'}`}
        />

        <h3
          className={`mt-2 font-semibold ${
            variant === 'primary'
              ? 'text-red-800 dark:text-red-200'
              : 'text-gray-800 dark:text-gray-200'
          }`}
        >
          {title}
        </h3>
        {message && (
          <p
            className={`mt-1 ${
              variant === 'primary'
                ? 'text-red-600 dark:text-red-300'
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            {message}
          </p>
        )}
      </div>

      {onRetry && (
        <button
          onClick={onRetry}
          className={`mt-4 rounded-md px-4 py-2 font-medium ${
            variant === 'primary'
              ? 'bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-800/30 dark:text-red-200 dark:hover:bg-red-800/50'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default Error;
