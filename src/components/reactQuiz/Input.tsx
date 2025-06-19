import { useState, useEffect } from 'react';

interface InputProps {
  answer: string;
  disabled: boolean;
  onSubmit: (userAnswer: string) => void;
}

const Input = ({ answer, onSubmit, disabled }: InputProps) => {
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // Reset input when resetTrigger changes or new question comes
  useEffect(() => {
    setUserInput('');
    setIsCorrect(null);
  }, [answer]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correct = userInput.trim().toLowerCase() === answer.toLowerCase();
    if (correct) {
      onSubmit(answer);
    }
    onSubmit(userInput);
    setIsCorrect(correct);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md">
      <div className="relative flex-1">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter answer..."
          disabled={disabled}
          aria-label="Quiz answer input"
          className={`text-textPrimary w-full rounded-l-lg border-2 px-4 py-3 transition-all focus:ring-2 focus:outline-none ${
            isCorrect === true
              ? 'border-green-500 bg-green-50 focus:ring-green-200 dark:bg-green-900/20'
              : isCorrect === false
                ? 'border-red-500 bg-red-50 focus:ring-red-200 dark:bg-red-900/20'
                : 'focus:border-accentPrimary border-gray-300 bg-white focus:ring-blue-200 dark:border-gray-600 dark:bg-gray-700'
          }`}
        />
        {isCorrect !== null && (
          <span
            className={`absolute top-1/2 right-3 -translate-y-1/2 text-xl ${
              isCorrect ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {isCorrect ? '✓' : '✗'}
          </span>
        )}
      </div>
      <button
        type="submit"
        disabled={disabled || !userInput.trim()}
        className={`rounded-r-lg px-6 py-3 font-medium text-white transition-colors ${
          disabled
            ? 'bg-gray-400 dark:bg-gray-600'
            : 'bg-accentPrimary hover:bg-accentPrimary/90'
        }`}
      >
        Submit
      </button>
    </form>
  );
};

export default Input;
