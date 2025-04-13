import { links } from '@/constants/info';
import { Github, Linkedin } from 'lucide-react';
import IconLink from './IconLink';
import { motion } from 'framer-motion';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

const AppFooter = () => {
  return (
    <div className='max-w-2xl mx-auto px-4 sm:px-0'>
      <div className='flex items-center justify-between h-24'>
        <motion.span
          className='text-sm'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          © 2025 Jasper Fernandez
        </motion.span>

        <div className='flex items-center gap-2 justify-center sm:justify-start'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
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
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
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
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
