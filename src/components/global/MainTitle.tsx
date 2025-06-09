import { ReactNode } from 'react';

interface MainTitleProps {
  title: string | ReactNode;
}

const MainTitle = ({ title }: MainTitleProps) => {
  return <h1 className="h1">{title}</h1>;
};

export default MainTitle;
