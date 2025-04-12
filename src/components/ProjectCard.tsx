import { Project } from '@/types';
import IconLink from './IconLink';
import { GitBranch, SquareArrowOutUpRight } from 'lucide-react';
import SkillBox from './SkillBox';
import { skills } from '@/constants/info';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard = ({ project, className = '' }: ProjectCardProps) => {
  return (
    <div
      className={`border border-border bg-card rounded-md p-4 h-full w-full ${className}`}
    >
      <img
        src={project.displayImage}
        className='h-40 w-full rounded mb-4'
        loading='lazy'
      />

      <h1 className='font-semibold'>{project.title}</h1>

      <p className='text-sm text-muted-foreground mb-4'>
        {project.description}
      </p>

      <div className='flex gap-2 items-center'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <IconLink
                  href={project.repoLink}
                  icon={<GitBranch size={16} strokeWidth={1.5} />}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Repository</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <IconLink
                  href={project.link}
                  icon={<SquareArrowOutUpRight size={16} strokeWidth={1.5} />}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Live view</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className='flex flex-wrap gap-2 mt-2'>
        {project.stack.map((tech) => {
          const skill = skills[tech as keyof typeof skills];

          if (!skill) return null;

          return (
            <SkillBox
              key={tech}
              title={skill.title}
              logo={
                <img
                  src={`/logos/${skill.key}.svg`}
                  alt={skill.title}
                  className='size-4'
                  loading='lazy'
                />
              }
              className='mt-2'
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
