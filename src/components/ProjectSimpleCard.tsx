import { Project } from '@/types';
import IconLink from './IconLink';
import { GitBranch, SquareArrowOutUpRight } from 'lucide-react';

interface ProjectSimpleCardProps {
  project: Project;
  className?: string;
}

const ProjectSimpleCard = ({
  project,
  className = '',
}: ProjectSimpleCardProps) => {
  return (
    <div className={`border border-border rounded-md p-4 w-full ${className}`}>
      <h1 className='font-semibold'>{project.title}</h1>

      <p className='text-sm text-muted-foreground mb-4'>
        {project.description}
      </p>

      <div className='flex gap-2 items-center'>
        <IconLink
          href={project.repoLink}
          icon={<GitBranch size={16} strokeWidth={1.5} />}
        />
        <IconLink
          href={project.link}
          icon={<SquareArrowOutUpRight size={16} strokeWidth={1.5} />}
        />
      </div>
    </div>
  );
};

export default ProjectSimpleCard;
