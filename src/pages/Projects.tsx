import ProjectCard from '@/components/ProjectCard';
import { APP_PATHS } from '@/constants/app-menus';
import { projects } from '@/constants/info';
import { ArrowLeft } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Projects = () => {
  return (
    <div className='max-w-2xl mx-auto space-y-8'>
      <div className='flex items-center justify-center relative'>
        <NavLink
          to={APP_PATHS.home}
          className='absolute left-2 sm:left-0 p-2 hover:bg-accent rounded-md'
        >
          <ArrowLeft size={16} strokeWidth={1.5} />
        </NavLink>

        <h1 className='font-bold text-xl'>All Projects</h1>
      </div>

      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        {Object.keys(projects).map((key) => {
          const project = projects[key as keyof typeof projects];
          return <ProjectCard key={key} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
