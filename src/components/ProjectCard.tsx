import { Project } from '@/types';
import IconLink from './IconLink';
import { GitBranch, SquareArrowOutUpRight } from 'lucide-react';
import SkillBox from './SkillBox';
import { skills } from '@/constants/info';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard = ({ project, className = '' }: ProjectCardProps) => {
  return (
    <div
      className={`border border-border rounded-md p-4 h-full w-full ${className}`}
    >
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
