import { motion } from 'framer-motion';

interface QuizBarProps {
  questionNum: number;
  quizLength: number;
  score: number;
  totalPoints: number;
}

const QuizBar = ({
  questionNum,
  quizLength,
  score,
  totalPoints,
}: QuizBarProps) => {
  return (
    <>
      <div className="relative h-4 rounded-full bg-gray-400">
        <motion.span
          animate={{
            width: `${((questionNum / quizLength) * 100).toFixed()}%`,
          }}
          transition={{ duration: questionNum === 1 ? 0 : 0.5 }}
          className="bg-accentPrimary absolute top-0 left-0 h-full rounded-full"
        />
      </div>

      <div className="flex w-full justify-between">
        <p className="text-textSecondary">
          <span className="text-textPrimary mr-1 font-medium">
            Current question:
          </span>
          {questionNum} / {quizLength}
        </p>
        <p className="text-textSecondary">
          {score} / {totalPoints}
          <span className="text-textPrimary ml-1 font-medium">Points</span>
        </p>
      </div>
    </>
  );
};

export default QuizBar;
