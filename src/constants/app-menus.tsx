import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import { Home as HomeIcon } from 'lucide-react';
export const APP_PATHS = {
  home: '/',
  projects: '/projects',
};

export const APP_MENUS = [
  {
    key: 'home',
    name: 'Home',
    path: APP_PATHS.home,
    icon: <HomeIcon />,
    page: <Home />,
  },
  {
    key: 'projects',
    name: 'Projects',
    path: APP_PATHS.projects,
    icon: <Home />,
    page: <Projects />,
  },
];
