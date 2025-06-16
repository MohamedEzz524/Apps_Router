import { QuizQuestionType } from '../../hooks/useReactQuiz';
import Input from './Input';
import Options from './Options';
import QuizTimerNext from './QuizTimerNext';

interface QuizQuestionProps {
  currQuestion: QuizQuestionType;
  userAnswer: string;
  dispatchNext: () => void;
  dispatchUserAnswer: (param: string) => void;
  dispatchCorrect: () => void;
  timeLeft: number;
  onTimeUp: () => void;
}

const QuizQuestion = ({
  currQuestion,
  dispatchCorrect,
  dispatchNext,
  dispatchUserAnswer,
  userAnswer,
  onTimeUp,
  timeLeft,
}: QuizQuestionProps) => {
  const { question, answer, options } = currQuestion;
  const chooseQuestion = !!options;

  const handleClick = (userAnswer: string) => {
    dispatchUserAnswer(userAnswer);
    if (userAnswer === answer) {
      dispatchCorrect();
    }
  };

  const disabled = !!userAnswer.length;

  return (
    <>
      <div className="bg-sidebar flex min-h-69 flex-col p-6">
        <h3 className="h2 text-textPrimary mb-2.5 font-bold">{question}</h3>

        {chooseQuestion ? (
          <Options
            options={options}
            selectedOption={userAnswer}
            handleClick={handleClick}
            answer={answer}
          />
        ) : (
          <Input answer={answer} disabled={disabled} onSubmit={handleClick} />
        )}
      </div>

      <QuizTimerNext onTimeUp={onTimeUp} initialMinutes={timeLeft}>
        {disabled && (
          <button
            type="button"
            onClick={dispatchNext}
            className="gray-button rounded-md"
          >
            Next
          </button>
        )}
      </QuizTimerNext>
    </>
  );
};

export default QuizQuestion;
