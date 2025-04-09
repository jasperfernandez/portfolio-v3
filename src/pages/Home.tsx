import jasperPhoto from '@/assets/jasper.png';
import { personalInfo } from '@/constants/personal-info';
import { MapPin } from 'lucide-react';

const Home = () => {
  return (
    <div>
      <div className='max-w-xl mx-auto'>
        <div className='flex gap-4 items-center'>
          <img
            src={jasperPhoto}
            alt='Jasper Fernandez'
            className='rounded-full h-36 w-36 border shadow'
          />

          <div className='flex-1'>
            <h1 className='text-xl font-bold'>{personalInfo.name}</h1>

            <div className='flex items-center gap-1'>
              <MapPin size={16} strokeWidth={1.5} />{' '}
              <span>{personalInfo.address}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
