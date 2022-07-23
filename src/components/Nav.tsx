import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { BsSun, BsMoon } from 'react-icons/bs';
import { motion } from 'framer-motion';

import CustomLink from './Link';

import navLinks from 'lib/data/navLinks';

const Nav = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme == 'dark') {
      return (
        <button
          className="mr-4 border border-white p-1 hover:bg-slate-800"
          onClick={() => setTheme('light')}
        >
          <BsSun size={20} />
        </button>
      );
    }

    return (
      <button
        className="mr-4 border-2 border-black p-1 hover:bg-slate-100"
        onClick={() => setTheme('dark')}
      >
        <BsMoon size={20} />
      </button>
    );
  };

  const style =
    'text-m font-medium text-slate-400 hover:text-black hover:dark:text-white hover:underline';
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.0, delay: 4.2 }}
      className="container relative mx-auto"
    >
      <div className="flex items-center justify-between">
        <CustomLink href="/" className="ml-4">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-9"
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
              dx=".025em"
              dy=".3em"
            >
              A
            </text>
          </svg>
        </CustomLink>
        <div className="hidden space-x-12 md:flex">
          {navLinks.map(({ key, href, name }) => (
            <CustomLink key={key} href={href} className={style}>
              {name}
            </CustomLink>
          ))}
        </div>

        {renderThemeChanger()}
      </div>
    </motion.nav>
  );
};

export default Nav;
