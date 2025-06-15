import { ReactNode } from 'react';

interface MainTitleProps {
  title: string | ReactNode;
  icon?: ReactNode;
  className?: string;
}

const MainTitle = ({ title, icon, className = '' }: MainTitleProps) => {
  return (
    <div className={`flex items-center gap-1`}>
      {icon && icon}
      <h1 className={`h1 ${className}`}>{title}</h1>
    </div>
  );
};

export default MainTitle;
