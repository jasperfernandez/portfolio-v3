import { personalInfo, links } from '@/constants/info';
import { MapPin, Github, Linkedin } from 'lucide-react';
import IconLink from './IconLink';
import { Button } from './ui/button';
import jasperPhoto from '@/assets/jasper.png';
import { motion } from 'framer-motion';
import DownloadIcon from './DownloadIcon';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className='flex flex-col sm:flex-row gap-6 sm:gap-10 items-center px-4 sm:px-0'
    >
      <motion.img
        src={jasperPhoto}
        alt='Jasper Fernandez'
        className='rounded-full h-36 w-36 border border-border shadow-sm'
        loading='lazy'
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05, rotate: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      />

      <div className='flex-1 text-center sm:text-left'>
        <motion.h1
          className='text-xl font-bold mb-1'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className='text-nowrap'>{personalInfo.name} </span>{' '}
          <span className='text-nowrap'>({personalInfo.role})</span>
        </motion.h1>

        <motion.div
          className='flex items-center gap-1 justify-center sm:justify-start'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <MapPin size={16} strokeWidth={1.5} />{' '}
          <span className='text-xs'>{personalInfo.address}</span>
        </motion.div>

        <div className='flex items-center gap-2 mt-4 justify-center sm:justify-start'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <IconLink
                    href={links.github}
                    icon={<Github size={16} strokeWidth={2} />}
                  />
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Github</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <IconLink
                    href={links.linkedin}
                    icon={<Linkedin size={16} strokeWidth={2} />}
                  />
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p>LinkedIn</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Button
              size={'sm'}
              className='flex items-center group'
              onClick={() => window.open(links.cv, '_blank')}
            >
              <DownloadIcon />
              <span className='font-semibold text-sm'>Download CV</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
