import { Route, Routes } from 'react-router-dom';
import routes from './apps/Exportation';
import Global from './global/Global';

function App() {
  return (
    <main className="main-body">
      <Global />

      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </main>
  );
}

export default App;
