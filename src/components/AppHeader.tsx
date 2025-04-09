import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { APP_PATHS } from '@/constants/app-menus';

const AppHeader = () => {
  return (
    <div className='max-w-2xl mx-auto px-4 sm:px-0'>
      <div className='flex items-center justify-between h-24'>
        <NavLink to={APP_PATHS.home}>
          <h1 className='font-bold text-lg'>JF</h1>
        </NavLink>

        <ThemeToggle />
      </div>
    </div>
  );
};

export default AppHeader;
