import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className='max-w-2xl mx-auto space-y-8'>
      <Hero />

      <div className='space-y-4'>
        {[About, Experience, Education, Projects, Skills].map((Comp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: i * 0.15,
              ease: 'easeOut',
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Comp />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
