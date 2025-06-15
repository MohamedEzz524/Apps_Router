import { ReactNode } from 'react';

interface MainQuizProps {
  children: ReactNode;
}

const MainQuiz = ({ children }: MainQuizProps) => {
  return (
    <main className="flex w-full max-w-3xl grow flex-col justify-center gap-5">
      {children}
    </main>
  );
};

export default MainQuiz;
