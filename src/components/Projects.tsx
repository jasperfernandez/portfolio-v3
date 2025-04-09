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
      <CardContent></CardContent>
    </Card>
  );
};

export default Projects;
