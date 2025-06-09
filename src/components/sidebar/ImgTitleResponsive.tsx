import { Link } from 'react-router-dom';
import myImg from '../../assets/me-trans1.png';

const ImgTitleResponsive = () => {
  return (
    <li className="mb-6 flex justify-center">
      <Link to="/">
        <img
          src={myImg}
          alt="MoRevo"
          className="h-12 w-12 rounded-full object-cover"
        />
      </Link>
    </li>
  );
};

export default ImgTitleResponsive;
