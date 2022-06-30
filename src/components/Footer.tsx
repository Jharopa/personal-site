import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGitCommit } from 'react-icons/fi';

import Spotify from 'components/Spotify';

const Footer = () => {
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/repos/Jharopa/personal-site/commits')
      .then((response) => response.json())
      .then((res) => setCommits(res.length));
  }, []);

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 2.0 }}
      variants={{
        hidden: { y: 25, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      className="my-6 flex flex-col items-center justify-evenly text-slate-500"
    >
      <div className="mb-4 hover:text-black hover:dark:text-white">
        <Spotify />
      </div>

      <a
        href="https://github.com/Jharopa/personal-site"
        className="hover:text-black dark:hover:text-white"
      >
        <div>Made by Alexander Burns</div>
        <div className="flex items-center justify-center">
          <FiGitCommit className="mr-1" />
          <span className="pb-0.5">{commits}</span>
        </div>
      </a>
    </motion.footer>
  );
};

export default Footer;
