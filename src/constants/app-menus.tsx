import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import { Home as HomeIcon } from 'lucide-react';

export const APP_MENUS = [
  {
    key: 'home',
    name: 'Home',
    path: '/',
    icon: <HomeIcon />,
    page: <Home />,
  },
  {
    key: 'projects',
    name: 'Projects',
    path: '/projects',
    icon: <Home />,
    page: <Projects />,
  },
];
