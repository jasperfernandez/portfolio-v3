import About from '@/components/About';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

const Home = () => {
  return (
    <div>
      <div className='max-w-2xl mx-auto space-y-8'>
        <Hero />
        <div className='space-y-4'>
          <About />
          <Experience />
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Home;
