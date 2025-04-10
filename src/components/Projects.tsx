import { FolderGit2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { projects } from '@/constants/info';
import ProjectSimpleCard from './ProjectSimpleCard';
import { NavLink } from 'react-router-dom';
import { APP_PATHS } from '@/constants/app-menus';
import { Button } from './ui/button';

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
          <ProjectSimpleCard
            title={projects.evotepro.title}
            description={projects.evotepro.description}
            link={projects.evotepro.link}
          />

          <ProjectSimpleCard
            title={projects.bms.title}
            description={projects.bms.description}
            link={projects.bms.link}
          />
          <ProjectSimpleCard
            title={projects.pms.title}
            description={projects.pms.description}
            link={projects.pms.link}
          />
          <ProjectSimpleCard
            title={projects.syllabot.title}
            description={projects.syllabot.description}
            link={projects.syllabot.link}
          />

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
