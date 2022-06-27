import NavLink from './NavLink';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { BsSun, BsMoon } from 'react-icons/bs';

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme == 'dark') {
      return (
        <button className="mr-8" onClick={() => setTheme('light')}>
          <BsSun size={20} />
        </button>
      );
    }

    return (
      <button className="mr-8" onClick={() => setTheme('dark')}>
        <BsMoon size={20} />
      </button>
    );
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 1.4 }}
        className="fixed top-0 z-[100] flex h-16 w-screen items-center justify-between bg-white dark:bg-black"
      >
        <NavLink href="/">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-3 w-9"
          >
            <circle
              className="fill-white stroke-black dark:fill-black dark:stroke-white"
              r="11"
              cx="12"
              cy="12"
              stroke="white"
              strokeWidth="1.5"
            />
            <text
              className="fill-black stroke-black dark:fill-white dark:stroke-white"
              x="50%"
              y="50%"
              textAnchor="middle"
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

        {renderThemeChanger()}
      </motion.header>
    </>
  );
};

export default Header;
