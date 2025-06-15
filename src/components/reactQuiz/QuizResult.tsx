import { motion } from 'framer-motion';
import { FaTrophy, FaRedo } from 'react-icons/fa';

interface QuizResultsProps {
  score: number;
  total: number;
  onRestart: () => void;
}

const QuizResult = ({ score, total, onRestart }: QuizResultsProps) => {
  const percentage = Math.round((score / total) * 100);
  const isPerfectScore = score === total;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex w-full grow flex-col items-center justify-center gap-6 text-center"
      aria-live="polite"
    >
      {/* Score Badge with Animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className={`relative flex h-32 w-32 items-center justify-center rounded-full border-8 ${
          isPerfectScore
            ? 'border-yellow-400 text-yellow-400'
            : 'border-blue-400 text-blue-400'
        }`}
      >
        <FaTrophy className="absolute text-5xl" />
        <span className="z-10 text-3xl font-bold">{score}</span>
      </motion.div>

      {/* Result Text */}
      <div className="space-y-2">
        <h2 className="text-textPrimary text-2xl font-bold">
          {isPerfectScore ? 'Perfect Score!' : 'Quiz Completed!'}
        </h2>
        <p className="text-textSecondary text-lg">
          You scored {score} out of {total} ({percentage}%)
        </p>
        {percentage < 50 && (
          <p className="text-sm text-gray-500">
            Keep practicing - you'll get better!
          </p>
        )}
      </div>

      {/* Restart Button */}
      <button
        type="reset"
        onClick={onRestart}
        className="bg-accentPrimary hover:bg-accentHover flex cursor-pointer items-center gap-2 rounded-sm px-4 py-2"
      >
        <FaRedo /> Restart Quiz
      </button>
    </motion.div>
  );
};

export default QuizResult;
