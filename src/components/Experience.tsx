import { BriefcaseBusiness } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const Experience = () => {
  return (
    <Card className='shadow-none py-4 rounded-md gap-4'>
      <CardHeader className='px-4 flex items-center'>
        <CardTitle className='text-sm flex items-center gap-1.5'>
          <BriefcaseBusiness size={20} strokeWidth={1.5} />
          <span className='font-bold'>My Experience</span>
        </CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};

export default Experience;
