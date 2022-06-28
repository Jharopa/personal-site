import Section from './Section';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Section>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex h-2/3 flex-col justify-center text-center"
      >
        <p className="pb-3">Hey there! I&apos;m</p>
        <h1 className="animate-text bg-gradient-to-r from-teal-500 via-indigo-500 to-pink-500 bg-clip-text pb-16 text-7xl text-transparent">
          Alexander Burns
        </h1>
        <motion.p
          initial={{ x: -250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.0 }}
          className="pb-3 text-center"
        >
          What I like,
        </motion.p>
        <motion.h1
          initial={{ x: 250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.0 }}
          className="pb-3 text-center text-5xl"
        >
          3D Graphics Programming.
        </motion.h1>
        <motion.h1
          initial={{ x: -250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.0 }}
          className="text-center text-5xl"
        >
          Web Development.
        </motion.h1>
      </motion.div>
    </Section>
  );
};

export default Hero;
