import IconLink from './IconLink';
import { GitBranch, SquareArrowOutUpRight } from 'lucide-react';

interface ProjectSimpleCardProps {
  title: string;
  description: string;
  link: string;
  className?: string;
}

const ProjectSimpleCard = ({
  title,
  description,
  link,
  className = '',
}: ProjectSimpleCardProps) => {
  return (
    <div className={`border border-border rounded-md p-4 w-full ${className}`}>
      <h1 className='font-semibold'>{title}</h1>

      <p className='text-sm text-muted-foreground mb-4'>{description}</p>

      <div className='flex gap-2 items-center'>
        <IconLink
          href={link}
          icon={<GitBranch size={16} strokeWidth={1.5} />}
        />
        <IconLink
          href={link}
          icon={<SquareArrowOutUpRight size={16} strokeWidth={1.5} />}
        />
      </div>
    </div>
  );
};

export default ProjectSimpleCard;
