import MainTitle from '../../components/global/MainTitle';
import worldLogo from '../../assets/worldwise/icon.png';
import { Route, Routes } from 'react-router-dom';

const WorldWise = () => {
  return (
    <section className="main-section">
      <MainTitle
        title="WorldWise"
        icon={<img src={worldLogo} alt="worldLogo" className="h-16 w-16" />}
      />

      <Routes>
        <Route></Route>
      </Routes>
    </section>
  );
};

export default WorldWise;
