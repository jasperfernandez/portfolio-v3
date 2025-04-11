import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { APP_PATHS } from '@/constants/app-menus';
import { motion } from 'framer-motion';

const AppHeader = () => {
  return (
    <div className='max-w-2xl mx-auto px-4 sm:px-0'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
        className='flex items-center justify-between h-24'
      >
        <NavLink to={APP_PATHS.home}>
          <motion.h1
            className='font-bold text-lg'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
          >
            JF
          </motion.h1>
        </NavLink>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <ThemeToggle />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AppHeader;
