import { Route, Routes } from 'react-router-dom';
import routes from './apps/Exportation';
import Sidebar from './global/Sidebar';
import Header from './global/Header';

function App() {
  return (
    <main className="main-body">
      <div className="flex gap-2.5">
        <Sidebar />
        <div className="relative flex w-full flex-col">
          <Header />

          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </div>
      </div>
    </main>
  );
}

export default App;
