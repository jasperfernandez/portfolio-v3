import { Route, Routes } from 'react-router-dom';
import { APP_MENUS } from './app-menus';

const AppRoutes = () => {
  return (
    <Routes>
      {APP_MENUS.map((menu) => (
        <Route key={menu.key} path={menu.path} element={menu.page} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
