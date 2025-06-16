import { ReactNode, useEffect, useState } from 'react';

interface QuizTimerNextProps {
  children: ReactNode;
  onTimeUp: () => void;
  initialMinutes?: number;
}

const QuizTimerNext = ({
  children,
  onTimeUp,
  initialMinutes = 10,
}: QuizTimerNextProps) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60); // in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onTimeUp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex items-center justify-between">
      <p
        className={`gray-button rounded-md ${
          timeLeft < 60 ? 'animate-pulse text-red-500' : ''
        }`}
      >
        {`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
      </p>
      {children}
    </div>
  );
};

export default QuizTimerNext;
