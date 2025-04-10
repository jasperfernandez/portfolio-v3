import { personalInfo, links } from '@/constants/info';
import { MapPin, Github, Linkedin, Download } from 'lucide-react';
import IconLink from './IconLink';
import { Button } from './ui/button';
import jasperPhoto from '@/assets/jasper.png';

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row gap-6 sm:gap-10 items-center px-4 sm:px-0'>
      <img
        src={jasperPhoto}
        alt='Jasper Fernandez'
        className='rounded-full h-36 w-36 border shadow-sm'
      />

      <div className='flex-1 text-center sm:text-left'>
        <h1 className='text-xl font-bold mb-1'>
          <span className='text-nowrap'>{personalInfo.name} </span>{' '}
          <span className='text-nowrap'>({personalInfo.role})</span>
        </h1>

        <div className='flex items-center gap-1 justify-center sm:justify-start'>
          <MapPin size={16} strokeWidth={1.5} />{' '}
          <span className='text-xs'>{personalInfo.address}</span>
        </div>

        <div className='flex items-center gap-2 mt-4 justify-center sm:justify-start'>
          <IconLink
            href={links.github}
            icon={<Github size={16} strokeWidth={2} />}
          />

          <IconLink
            href={links.linkedin}
            icon={<Linkedin size={16} strokeWidth={2} />}
          />

          <Button
            size={'sm'}
            className='flex items-center'
            onClick={() => window.open(links.cv, '_blank')}
          >
            <Download size={16} strokeWidth={2} />
            <span className='font-semibold text-sm'>Download CV</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
