import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineStar } from 'react-icons/ai';

import CustomLink from './Link';
import Spotify from './Spotify';

const Footer = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/repos/Jharopa/personal-site')
      .then((response) => response.json())
      .then((res) => setStars(res.stargazers_count));
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

      <CustomLink
        href="https://github.com/Jharopa/personal-site"
        className="mb-2 hover:text-black dark:hover:text-white"
      >
        <div>Made by Alexander Burns</div>
        <div className="flex items-center justify-center">
          <AiOutlineStar className="mr-1" />
          <span className="pb-0.5">{stars}</span>
        </div>
      </CustomLink>
    </motion.footer>
  );
};

export default Footer;
