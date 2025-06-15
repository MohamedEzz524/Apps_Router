import { Outlet } from 'react-router-dom';
import MainTitle from '../../components/global/MainTitle';

const Profile = () => {
  return (
    <section className="main-section">
      <MainTitle title="MY Profile" />
      <Outlet />
    </section>
  );
};

export default Profile;
