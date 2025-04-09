import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import AppRoutes from './constants/app-routes';

const App = () => {
  return (
    <>
      <AppHeader />
      <AppRoutes />
      <AppFooter />
    </>
  );
};

export default App;
