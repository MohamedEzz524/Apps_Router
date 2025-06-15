import { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { PiSmileySad } from 'react-icons/pi';

const noDataContainerStyles = cva(
  'flex flex-col items-center justify-center gap-4 p-6 rounded-lg text-center',
  {
    variants: {
      variant: {
        primary: 'bg-blue-50 dark:bg-blue-900/20',
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

interface NoDataFoundProps extends VariantProps<typeof noDataContainerStyles> {
  title?: string;
  message?: string;
  action?: ReactNode;
  fullScreen?: boolean;
  className?: string;
}

const NoDataFound: React.FC<NoDataFoundProps> = ({
  variant,
  size,
  title = 'No Data Found',
  message = "We couldn't find any data matching your criteria",
  action,
  fullScreen = false,
  className = '',
}) => {
  return (
    <div
      className={`m-auto ${noDataContainerStyles({ variant, size })} ${
        fullScreen ? 'h-screen w-full' : ''
      } ${className}`}
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center">
        <PiSmileySad
          className={`h-12 w-12 ${variant === 'primary' ? 'text-blue-500' : variant === 'secondary' ? 'text-gray-500' : 'text-gray-700 dark:text-gray-300'}`}
        />

        <h3
          className={`mt-2 font-semibold ${
            variant === 'primary'
              ? 'text-blue-800 dark:text-blue-200'
              : 'text-gray-800 dark:text-gray-200'
          }`}
        >
          {title}
        </h3>
        <p
          className={`mt-1 ${
            variant === 'primary'
              ? 'text-blue-600 dark:text-blue-300'
              : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          {message}
        </p>
      </div>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
};

export default NoDataFound;
