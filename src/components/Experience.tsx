import { BriefcaseBusiness } from 'lucide-react';
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
import { myExperience } from '@/constants/info';

const Experience = () => {
  return (
    <Card className='shadow-none py-4 rounded-md gap-4'>
      <CardHeader className='px-4 flex items-center'>
        <CardTitle className='text-sm flex items-center gap-1.5'>
          <BriefcaseBusiness size={20} strokeWidth={1.5} />
          <span className='font-bold'>Experience</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Timeline defaultValue={1}>
          {myExperience.map((item) => (
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

export default Experience;
