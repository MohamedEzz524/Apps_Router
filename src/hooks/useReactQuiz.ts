import { useEffect, useReducer } from 'react';

export type QuizQuestionType = {
  question: string;
  answer: string;
  id: string;
  options?: string[];
  points: number;
};

export type StatusType = 'loading' | 'error' | 'ready' | 'active' | 'finished';

type StateType = {
  data: QuizQuestionType[];
  status: StatusType;
  index: number;
  score: number;
  useAnswer: string;
  timeLeft: number;
};

export type ActionType =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: QuizQuestionType[] }
  | { type: 'FETCH_ERROR'; payload: string }
  | { type: 'QUIZ_START' }
  | { type: 'QUIZ_FINISHED' }
  | { type: 'QUIZ_RESET' }
  | { type: 'NEXT_QUESTION' }
  | { type: 'CORRECT_ANSWER'; payload: number }
  | { type: 'USER_ANSWER'; payload: string }
  | { type: 'START_TIMER' }
  | { type: 'STOP_TIMER' }
  | { type: 'DECREMENT_TIME' }
  | { type: 'RESET_TIMER' };

const initialState: StateType = {
  data: [],
  status: 'loading',
  index: 0,
  score: 0,
  useAnswer: '',
  timeLeft: 1, // 1 minutes for each question
};

const reducer = (state: StateType, action: ActionType): StateType => {
  const numberOfQuestions = state.data.length;

  switch (action.type) {
    case 'FETCH_START':
      return { ...state, status: 'loading' };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        data: action.payload,
        status: 'ready',
        timeLeft: numberOfQuestions * 1,
      };
    case 'FETCH_ERROR':
      return { ...state, status: 'error' };
    case 'QUIZ_START':
      return { ...state, status: 'active' };
    case 'QUIZ_FINISHED':
      return { ...state, status: 'finished' };
    case 'USER_ANSWER':
      return { ...state, useAnswer: action.payload };
    case 'NEXT_QUESTION':
      return { ...state, index: state.index + 1, useAnswer: '' };
    case 'CORRECT_ANSWER':
      return { ...state, score: state.score + action.payload };

    case 'QUIZ_RESET':
      return {
        ...state,
        score: 0,
        status: 'active',
        index: 0,
        useAnswer: '',
        timeLeft: numberOfQuestions * 1,
      };

    default:
      throw new Error('Unknown Action');
  }
};

const useReactQuiz = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        dispatch({ type: 'FETCH_START' });

        const response = await fetch('data/reactQuiz.json');
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const responseJson = await response.json();

        dispatch({ type: 'FETCH_SUCCESS', payload: responseJson });
      } catch (error) {
        if (error instanceof Error) {
          dispatch({ type: 'FETCH_ERROR', payload: error.message });
        } else {
          dispatch({ type: 'FETCH_ERROR', payload: 'Unknown Error' });
        }
      }
    };

    fetchQuizData();
  }, []);

  return {
    data: state.data,
    status: state.status,
    currIndex: state.index,
    score: state.score,
    useAnswer: state.useAnswer,
    timeLeft: state.timeLeft,
    dispatch,
  };
};

export default useReactQuiz;
