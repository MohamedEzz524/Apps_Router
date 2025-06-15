import Profile from './profile/Profile';
import { FaMoneyBill, FaUser } from 'react-icons/fa';
import { BiSolidCameraMovie } from 'react-icons/bi';
import { MdQuiz } from 'react-icons/md';
import { RouteObject } from 'react-router-dom';
import ShareBill from './ShareBill/ShareBill';
import UsePopcorn from './usePopcorn/UsePopcorn';
import ReactQuiz from './ReactQuiz/ReactQuiz';

type ExtendedRoute = RouteObject & {
  title: string;
  icon: React.ReactNode;
  date: string;
};

const routes: ExtendedRoute[] = [
  {
    path: '/',
    title: 'Profile',
    element: <Profile />,
    icon: <FaUser />,
    date: 'Saturday, June 7, 2025',
  },
  {
    path: '/ShareBill',
    title: 'Share Bill',
    element: <ShareBill />,
    icon: <FaMoneyBill />,
    date: 'Saturday, June 9, 2025',
  },
  {
    path: '/Movies',
    title: 'Movies',
    element: <UsePopcorn />,
    icon: <BiSolidCameraMovie />,
    date: 'Saturday, June 11, 2025',
  },
  {
    path: '/ReactQuiz',
    title: 'React Quiz',
    element: <ReactQuiz />,
    icon: <MdQuiz />,
    date: 'Saturday, June 14, 2025',
  },
];

export default routes;
