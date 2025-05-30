import {
  Blocks,
  Braces,
  Cloudy,
  CodeXml,
  Database,
  Server,
  Terminal,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { skills } from '@/constants/info';
import SkillBox from './SkillBox';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <Card className='shadow-none py-4 rounded-md gap-4'>
      <CardHeader className='px-4 flex items-center'>
        <CardTitle className='text-sm flex items-center gap-1.5'>
          <Terminal size={20} strokeWidth={1.5} />
          <span className='font-bold'>Skills</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue='tab-1'
          orientation='vertical'
          className='w-full flex-row sm:flex-col'
        >
          <TabsList className='h-auto justify-start rounded-none border-l sm:border-l-0 sm:border-b sm:w-full bg-transparent flex flex-col p-0 sm:flex-row sm:justify-start'>
            <TabsTrigger
              value='tab-1'
              className='data-[state=active]:after:bg-primary relative flex-col rounded-none px-4 py-2 text-xs after:absolute after:inset-y-0 sm:after:inset-y-14 after:inset-x-0 after:w-0.5 sm:after:w-auto sm:after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none justify-start w-full sm:w-auto after:top-0 after:bottom-0 sm:after:top-auto sm:after:bottom-0'
            >
              <CodeXml
                className='mb-1.5 opacity-60'
                size={16}
                aria-hidden='true'
              />
              All
            </TabsTrigger>
            <TabsTrigger
              value='tab-2'
              className='data-[state=active]:after:bg-primary relative flex-col rounded-none px-4 py-2 text-xs after:absolute after:inset-y-0 sm:after:inset-y-14 after:inset-x-0 after:w-0.5 sm:after:w-auto sm:after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none justify-start w-full sm:w-auto after:top-0 after:bottom-0 sm:after:top-auto sm:after:bottom-0'
            >
              <Braces
                className='mb-1.5 opacity-60'
                size={16}
                aria-hidden='true'
              />
              Frontend
            </TabsTrigger>
            <TabsTrigger
              value='tab-3'
              className='data-[state=active]:after:bg-primary relative flex-col rounded-none px-4 py-2 text-xs after:absolute after:inset-y-0 sm:after:inset-y-14 after:inset-x-0 after:w-0.5 sm:after:w-auto sm:after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none justify-start w-full sm:w-auto after:top-0 after:bottom-0 sm:after:top-auto sm:after:bottom-0'
            >
              <Server
                className='mb-1.5 opacity-60'
                size={16}
                aria-hidden='true'
              />
              Backend
            </TabsTrigger>
            <TabsTrigger
              value='tab-4'
              className='data-[state=active]:after:bg-primary relative flex-col rounded-none px-4 py-2 text-xs after:absolute after:inset-y-0 sm:after:inset-y-14 after:inset-x-0 after:w-0.5 sm:after:w-auto sm:after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none justify-start w-full sm:w-auto after:top-0 after:bottom-0 sm:after:top-auto sm:after:bottom-0'
            >
              <Database
                className='mb-1.5 opacity-60'
                size={16}
                aria-hidden='true'
              />
              Databases
            </TabsTrigger>
            <TabsTrigger
              value='tab-5'
              className='data-[state=active]:after:bg-primary relative flex-col rounded-none px-4 py-2 text-xs after:absolute after:inset-y-0 sm:after:inset-y-14 after:inset-x-0 after:w-0.5 sm:after:w-auto sm:after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none justify-start w-full sm:w-auto after:top-0 after:bottom-0 sm:after:top-auto sm:after:bottom-0'
            >
              <Cloudy
                className='mb-1.5 opacity-60'
                size={16}
                aria-hidden='true'
              />
              DevOps
            </TabsTrigger>
            <TabsTrigger
              value='tab-6'
              className='data-[state=active]:after:bg-primary relative flex-col rounded-none px-4 py-2 text-xs after:absolute after:inset-y-0 sm:after:inset-y-14 after:inset-x-0 after:w-0.5 sm:after:w-auto sm:after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none justify-start w-full sm:w-auto after:top-0 after:bottom-0 sm:after:top-auto sm:after:bottom-0'
            >
              <Blocks
                className='mb-1.5 opacity-60'
                size={16}
                aria-hidden='true'
              />
              Tools
            </TabsTrigger>
          </TabsList>

          <TabsContent value='tab-1'>
            {/* <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4'> */}
            <div className='flex flex-wrap gap-4 p-4'>
              {Object.keys(skills).map((key, index) => {
                const skill = skills[key as keyof typeof skills];
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: 'easeOut',
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <SkillBox
                      title={skill.title}
                      logo={
                        <img
                          src={`/logos/${key}.svg`}
                          alt={skill.title}
                          className='size-4'
                          loading='lazy'
                        />
                      }
                    />
                  </motion.div>
                );
              })}
            </div>
          </TabsContent>
          <TabsContent value='tab-2'>
            {/* <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4'> */}
            <div className='flex flex-wrap gap-4 p-4'>
              {(Object.keys(skills) as (keyof typeof skills)[])
                .filter((key) => skills[key].type === 'frontend')
                .map((key, index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: 'easeOut',
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <SkillBox
                      title={skills[key].title}
                      logo={
                        <img
                          src={`/logos/${key}.svg`}
                          alt={skills[key].title}
                          className='size-4'
                          loading='lazy'
                        />
                      }
                    />
                  </motion.div>
                ))}
            </div>
          </TabsContent>
          <TabsContent value='tab-3'>
            {/* <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4'> */}
            <div className='flex flex-wrap gap-4 p-4'>
              {(Object.keys(skills) as (keyof typeof skills)[])
                .filter((key) => skills[key].type === 'backend')
                .map((key, index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: 'easeOut',
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <SkillBox
                      title={skills[key].title}
                      logo={
                        <img
                          src={`/logos/${key}.svg`}
                          alt={skills[key].title}
                          className='size-4'
                          loading='lazy'
                        />
                      }
                    />
                  </motion.div>
                ))}
            </div>
          </TabsContent>
          <TabsContent value='tab-4'>
            {/* <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4'> */}
            <div className='flex flex-wrap gap-4 p-4'>
              {(Object.keys(skills) as (keyof typeof skills)[])
                .filter((key) => skills[key].type === 'database')
                .map((key, index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: 'easeOut',
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <SkillBox
                      title={skills[key].title}
                      logo={
                        <img
                          src={`/logos/${key}.svg`}
                          alt={skills[key].title}
                          className='size-4'
                          loading='lazy'
                        />
                      }
                    />
                  </motion.div>
                ))}
            </div>
          </TabsContent>

          <TabsContent value='tab-5'>
            {/* <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4'> */}
            <div className='flex flex-wrap gap-4 p-4'>
              {(Object.keys(skills) as (keyof typeof skills)[])
                .filter((key) => skills[key].type === 'devops')
                .map((key, index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: 'easeOut',
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <SkillBox
                      title={skills[key].title}
                      logo={
                        <img
                          src={`/logos/${key}.svg`}
                          alt={skills[key].title}
                          className='size-4'
                          loading='lazy'
                        />
                      }
                    />
                  </motion.div>
                ))}
            </div>
          </TabsContent>

          <TabsContent value='tab-6'>
            {/* <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4'> */}
            <div className='flex flex-wrap gap-4 p-4'>
              {(Object.keys(skills) as (keyof typeof skills)[])
                .filter((key) => skills[key].type === 'tools')
                .map((key, index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: 'easeOut',
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <SkillBox
                      title={skills[key].title}
                      logo={
                        <img
                          src={`/logos/${key}.svg`}
                          alt={skills[key].title}
                          className='size-4'
                          loading='lazy'
                        />
                      }
                    />
                  </motion.div>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default Skills;
