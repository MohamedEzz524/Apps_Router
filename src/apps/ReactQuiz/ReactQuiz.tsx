import MainTitle from '../../components/global/MainTitle';
import { FaReact } from 'react-icons/fa';
import MainQuiz from '../../components/reactQuiz/MainQuiz';
import LetsStart from '../../components/reactQuiz/LetsStart';
import useReactQuiz from '../../hooks/useReactQuiz';
import Loading from '../../components/global/Loading';
import Error from '../../components/global/Error';
import QuizBar from '../../components/reactQuiz/QuizBar';
import QuizQuestion from '../../components/reactQuiz/QuizQuestion';
import QuizResult from '../../components/reactQuiz/QuizResult';
import { useCallback, useMemo } from 'react';

const ReactQuiz = () => {
  const { data, status, currIndex, useAnswer, timeLeft, score, dispatch } =
    useReactQuiz();

  const quizLength = data.length;

  const currentQuestion = data[currIndex] || {};
  const questionPoint = currentQuestion?.points || 0;
  const isLastQuestion = currIndex === quizLength - 1;

  const totalPoints = useMemo(() => {
    return data.reduce((acc, question) => acc + (question.points || 0), 0);
  }, [data]);

  const dispatchNext = () => {
    return isLastQuestion
      ? dispatch({ type: 'QUIZ_FINISHED' })
      : dispatch({ type: 'NEXT_QUESTION' });
  };

  const dispatchUserAnswer = useCallback(
    (answerIndex: string) => {
      dispatch({ type: 'USER_ANSWER', payload: answerIndex });
    },
    [dispatch],
  );

  const dispatchActive = useCallback(() => {
    dispatch({ type: 'QUIZ_START' });
  }, [dispatch]);

  const dispatchCorrect = useCallback(() => {
    dispatch({ type: 'CORRECT_ANSWER', payload: questionPoint });
  }, [dispatch, questionPoint]);

  const dispatchReset = useCallback(() => {
    dispatch({ type: 'QUIZ_RESET' });
  }, [dispatch]);

  const handleTimeUp = useCallback(() => {
    dispatch({ type: 'QUIZ_FINISHED' });
  }, [dispatch]);

  return (
    <section className="main-section">
      <MainTitle
        title="The React Quiz"
        icon={<FaReact className="text-accentPrimary text-5xl" />}
        className="font-fugaz"
      />

      {status === 'loading' && <Loading fullScreen />}
      {status === 'error' && <Error title="No Data Found" fullScreen />}

      {/* Quiz Data 'Ready' */}
      {status === 'ready' && (
        <LetsStart start={dispatchActive} length={quizLength} />
      )}

      {/* Quiz Begin */}
      {status === 'active' && (
        <MainQuiz>
          <QuizBar
            questionNum={currIndex + 1}
            quizLength={quizLength}
            score={score}
            totalPoints={totalPoints}
          />

          <QuizQuestion
            onTimeUp={handleTimeUp}
            currQuestion={currentQuestion}
            dispatchCorrect={dispatchCorrect}
            dispatchNext={dispatchNext}
            dispatchUserAnswer={dispatchUserAnswer}
            userAnswer={useAnswer}
            timeLeft={timeLeft}
          />
        </MainQuiz>
      )}

      {/* Quiz Result */}
      {status === 'finished' && (
        <QuizResult
          score={score}
          total={totalPoints}
          onRestart={dispatchReset}
        />
      )}
    </section>
  );
};

export default ReactQuiz;
