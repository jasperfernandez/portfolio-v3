import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

const Home = () => {
  return (
    <div className='max-w-2xl mx-auto space-y-8'>
      <Hero />
      <div className='space-y-4'>
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
      </div>
    </div>
  );
};

export default Home;
