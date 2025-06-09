import MainTitle from '../global/MainTitle';
import { LuPopcorn } from 'react-icons/lu';
import { ReactNode } from 'react';

interface MoviesHeaderProps {
  children: ReactNode;
}

const MoviesHeader = ({ children }: MoviesHeaderProps) => {
  return (
    <nav className="bg-accentPrimary flex min-h-15 w-full flex-wrap items-center justify-between rounded-sm p-2 text-white">
      <MainTitle
        title={
          <div className="flex items-center gap-1 text-white">
            <LuPopcorn />
            UsePopcorn
          </div>
        }
      />
      {children}
    </nav>
  );
};

export default MoviesHeader;
