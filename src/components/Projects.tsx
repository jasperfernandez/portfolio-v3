import { FolderGit2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

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
        <div className='border border-border rounded-md p-4'>
          <h1 className='font-medium'>E-VotePro</h1>

          <p className='text-sm text-muted-foreground'>
            A decentralized voting system built on the Ethereum blockchain,
            ensuring transparency and security in the voting process.
          </p>
          <div>
            {/* <SkillBox
            title='Laravel'
            logo={skills.laravel}
             > */}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Projects;
