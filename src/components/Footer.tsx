import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/repos/Jharopa/personal-site/commits')
      .then((response) => response.json())
      .then((res) => setCommits(res.length));
  }, []);

  return (
    <footer className="flex justify-center items-center h-16 my-4 bg-[#041421]">
      <a
        href="https://github.com/Jharopa/personal-site"
        className="hover:text-[#D0D6D6]"
      >
        <div>Made by Alexander Burns</div>
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 640 512"
            fill="none"
            stroke="currentColor"
            strokeWidth="24"
          >
            <path d="M476.8 288C461.1 361 397.4 416 320 416C242.6 416 178 361 163.2 288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H163.2C178 150.1 242.6 96 320 96C397.4 96 461.1 150.1 476.8 224H608C625.7 224 640 238.3 640 256C640 273.7 625.7 288 608 288H476.8zM320 336C364.2 336 400 300.2 400 256C400 211.8 364.2 176 320 176C275.8 176 240 211.8 240 256C240 300.2 275.8 336 320 336z" />
          </svg>
          <span className="text-center px-2 pb-0.5">{commits}</span>
        </div>
      </a>
    </footer>
  );
};

export default Footer;
