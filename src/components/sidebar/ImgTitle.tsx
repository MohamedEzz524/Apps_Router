import { Link } from 'react-router-dom';
import myImg from '../../assets/me-trans1.png';

const ImgTitle = () => {
  return (
    <li className="mb-6 flex flex-col items-center gap-2.5">
      <Link to="/">
        <img
          src={myImg}
          alt="MoRevo"
          className="h-25 w-25 rounded-full object-cover"
        />
      </Link>
      <h3 className="h3 text-textPrimary font-sans font-bold">
        Eng. Mohamed ELSayed
      </h3>
      <h4 className="h4 text-textSecondary">SW Engineer | React Developer</h4>
    </li>
  );
};

export default ImgTitle;
