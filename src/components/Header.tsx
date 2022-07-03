import { motion } from 'framer-motion';

import Nav from './Nav';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.0, delay: 4.5 }}
      className="fixed z-[100] flex h-16 w-screen items-center justify-center bg-white dark:bg-black"
    >
      <Nav />
    </motion.header>
  );
};

export default Header;
