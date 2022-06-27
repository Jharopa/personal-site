import Section from './Section';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Section>
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="flex h-2/3 flex-col justify-center"
      >
        <p className="pb-3">Hey there! I&apos;m</p>
        <h1 className="pb-3 text-6xl">Alexander Burns</h1>
        <h1 className="text-6xl">I love all things computers.</h1>
      </motion.div>
    </Section>
  );
};

export default Hero;
