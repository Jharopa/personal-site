import NavLink from './NavLink';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 1.4 }}
        className="fixed top-0 z-[100] flex h-16 w-screen items-center justify-between bg-[#000000]"
      >
        <NavLink href="/">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-3 w-9 hover:fill-slate-800"
          >
            <circle r="11" cx="12" cy="12" stroke="white" strokeWidth="1" />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              fill="white"
              stroke="white"
              strokeWidth=".1"
              dx=".03em"
              dy=".3em"
            >
              A
            </text>
          </svg>
        </NavLink>

        <nav>
          <div className="flex h-16 w-96 items-center justify-evenly">
            <NavLink href="/">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="https://github.com/Jharopa">Resume</NavLink>
          </div>
        </nav>
      </motion.header>
    </>
  );
};

export default Header;
