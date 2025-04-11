import { FolderGit2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { projects } from '@/constants/info';
import ProjectSimpleCard from './ProjectSimpleCard';
import { NavLink } from 'react-router-dom';
import { APP_PATHS } from '@/constants/app-menus';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <Card className='shadow-none py-4 rounded-md gap-4'>
      <CardHeader className='px-4 flex items-center'>
        <CardTitle className='text-sm flex items-center gap-1.5'>
          <FolderGit2 size={20} strokeWidth={1.5} />
          <span className='font-bold'>Projects</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='space-y-4'>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0 * 0.1,
              ease: 'easeOut',
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ProjectSimpleCard project={projects.evotepro} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 1 * 0.1,
              ease: 'easeOut',
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ProjectSimpleCard project={projects.bms} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 2 * 0.1,
              ease: 'easeOut',
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ProjectSimpleCard project={projects.pms} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 3 * 0.1,
              ease: 'easeOut',
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ProjectSimpleCard project={projects.syllabot} />
          </motion.div>

          <NavLink to={APP_PATHS.projects} preventScrollReset>
            <Button variant={'link'} effect={'underline'}>
              All Projects
            </Button>
          </NavLink>
        </div>
      </CardContent>
    </Card>
  );
};

export default Projects;
