import { links } from '@/constants/info';
import { Github, Linkedin } from 'lucide-react';
import IconLink from './IconLink';

const AppFooter = () => {
  return (
    <div className='max-w-2xl mx-auto px-4 sm:px-0'>
      <div className='flex items-center justify-between h-24'>
        <span className='text-sm'>© 2025 Jasper Fernandez</span>

        <div className='flex items-center gap-2 justify-center sm:justify-start'>
          <IconLink
            href={links.github}
            icon={<Github size={16} strokeWidth={2} />}
          />

          <IconLink
            href={links.linkedin}
            icon={<Linkedin size={16} strokeWidth={2} />}
          />
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
