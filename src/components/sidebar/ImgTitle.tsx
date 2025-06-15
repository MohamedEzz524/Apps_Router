import { Link } from 'react-router-dom';
import myImg from '../../assets/me-trans1.png';
import { motion } from 'framer-motion';

const ImgTitle = () => {
  return (
    <li className="mb-6 flex flex-col items-center gap-2.5 px-1">
      <Link to="/">
        <img
          src={myImg}
          alt="MoRevo"
          className="h-25 w-25 rounded-full object-cover"
        />
      </Link>

      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.1 }}
        className="max-h-13 overflow-hidden"
      >
        <p className="h3 text-textPrimary font-sans font-bold">
          Eng. Mohamed ELSayed
        </p>
        <span className="h4 text-textSecondary">
          SW Engineer | React Developer
        </span>
      </motion.h3>
    </li>
  );
};

export default ImgTitle;
