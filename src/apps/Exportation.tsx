import Profile from './profile/Profile';
import { FaMoneyBill, FaUser } from 'react-icons/fa';
import { BiSolidCameraMovie } from 'react-icons/bi';
import { RouteObject } from 'react-router-dom';
import ShareBill from './ShareBill/ShareBill';
import UsePopcorn from './usePopcorn/UsePopcorn';

type ExtendedRoute = RouteObject & {
  title: string;
  icon: React.ReactNode;
};

const routes: ExtendedRoute[] = [
  {
    path: '/',
    title: 'Profile',
    element: <Profile />,
    icon: <FaUser />,
  },
  {
    path: '/ShareBill',
    title: 'Share Bill',
    element: <ShareBill />,
    icon: <FaMoneyBill />,
  },
  {
    path: '/Movies',
    title: 'Movies',
    element: <UsePopcorn />,
    icon: <BiSolidCameraMovie />,
  },
];

export default routes;
