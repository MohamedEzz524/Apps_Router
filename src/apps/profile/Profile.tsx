import { Outlet } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="text-textPrimary">
      MY Profile
      <Outlet />
    </div>
  );
};

export default Profile;
