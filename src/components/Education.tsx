import { GraduationCap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from './ui/timeline';
import { educations } from '@/constants/info';

const Education = () => {
  return (
    <Card className='shadow-none py-4 rounded-md gap-4'>
      <CardHeader className='px-4 flex items-center'>
        <CardTitle className='text-sm flex items-center gap-1.5'>
          <GraduationCap size={20} strokeWidth={1.5} />
          <span className='font-bold'>Education</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Timeline>
          {educations.map((item) => (
            <TimelineItem key={item.id} step={item.id}>
              <TimelineHeader>
                <TimelineSeparator />
                <TimelineDate>{item.date}</TimelineDate>
                <TimelineTitle>{item.title}</TimelineTitle>
                <TimelineIndicator />
              </TimelineHeader>
              <TimelineContent>{item.description}</TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </CardContent>
    </Card>
  );
};

export default Education;
