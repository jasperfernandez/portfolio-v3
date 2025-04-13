import ProjectCard from '@/components/ProjectCard';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { APP_PATHS } from '@/constants/app-menus';
import { projects } from '@/constants/info';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Projects = () => {
  return (
    <div className='max-w-2xl mx-auto space-y-8'>
      <div className='flex justify-center items-center relative'>
        <div className='absolute left-2 sm:left-0'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <NavLink to={APP_PATHS.home} tabIndex={-1}>
                  <button className='p-2 hover:bg-accent rounded-md border border-transparent outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring'>
                    <ArrowLeft size={16} strokeWidth={1.5} />
                  </button>
                </NavLink>
              </TooltipTrigger>
              <TooltipContent>
                <p>Back</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <h1 className='font-bold text-xl'>All Projects</h1>
      </div>

      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        {Object.keys(projects).map((key, index) => {
          const project = projects[key as keyof typeof projects];
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
