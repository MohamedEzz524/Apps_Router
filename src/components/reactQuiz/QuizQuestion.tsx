import { QuizQuestionType } from '../../hooks/useReactQuiz';
import Input from './Input';
import Options from './Options';
import QuizTimerNext from './QuizTimerNext';

interface QuizQuestionProps {
  currQuestion: QuizQuestionType;
  dispatchCorrect: () => void;
  dispatchNext: () => void;
  dispatchUserAnswer: (param: string) => void;
  userAnswer: string;
  onTimeUp: () => void;
  isActive: boolean;
}

const QuizQuestion = ({
  currQuestion,
  dispatchCorrect,
  dispatchNext,
  dispatchUserAnswer,
  userAnswer,
  onTimeUp,
  isActive,
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

      <QuizTimerNext onTimeUp={onTimeUp} isActive={isActive}>
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
