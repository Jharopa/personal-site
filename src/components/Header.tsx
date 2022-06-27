import NavLink from './NavLink';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme == 'dark') {
      return (
        <button className="mr-5" onClick={() => setTheme('light')}>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            ></path>
          </svg>
        </button>
      );
    }

    return (
      <button className="mr-5" onClick={() => setTheme('dark')}>
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          ></path>
        </svg>
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
