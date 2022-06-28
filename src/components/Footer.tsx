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
      className="my-12 flex flex-col items-center justify-evenly text-slate-500"
    >
      <a
        href="https://github.com/Jharopa/personal-site"
        className="mb-2 hover:text-black dark:hover:text-white"
      >
        <div>Made by Alexander Burns</div>
        <div className="flex items-center justify-center">
          <FiGitCommit />
          <span className="px-2 pb-0.5">{commits}</span>
        </div>
      </a>

      <div className="hover:text-black hover:dark:text-white">
        <Spotify />
      </div>
    </motion.footer>
  );
};

export default Footer;
