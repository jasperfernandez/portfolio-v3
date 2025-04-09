import { CircleUserRound } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { personalInfo } from '@/constants/info';

const About = () => {
  return (
    <Card className='shadow-none py-4 rounded-md gap-4'>
      <CardHeader className='px-4 flex items-center'>
        <CardTitle className='text-sm flex items-center gap-1.5'>
          <CircleUserRound size={20} strokeWidth={1.5} />
          <span className='font-bold'>Who am I?</span>
        </CardTitle>
      </CardHeader>

      <CardContent className='space-y-2 text-justify'>
        {personalInfo.whoAmI}
      </CardContent>
    </Card>
  );
};

export default About;
