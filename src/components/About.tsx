import dynamic from 'next/dynamic';
import CustomLink from './Link';

const About = () => {
  return (
    <>
      <div className="m-auto flex h-full w-2/3 flex-col items-center justify-center md:w-1/2">
        <h2 className="my-3 text-2xl md:text-3xl">About Me</h2>
        <div>
          <p className="my-3">
            Thanks for coming to take a look at my site, my name is Alex, and I
            have an interest in all things computer Graphics and Web
            Development!
          </p>
          <p className="my-3">
            I am currently working as a support technician for the WordPress
            hosting company and digital experience platform WP Engine, but in my
            spare time I enjoy learing about and exploring any software that is
            browser, server, or GPU related.
          </p>
          <p className="my-3">
            Right now I am playing around with technologies like:
          </p>
          <ul className="gap-x my-3 grid w-96 list-disc grid-cols-2 p-6">
            <li>
              <CustomLink
                href="https://www.opengl.org/"
                className="text-slate-500 hover:text-black hover:underline dark:hover:text-white"
              >
                OpenGL
              </CustomLink>
            </li>
            <li>
              <CustomLink
                href="https://cplusplus.com/"
                className="text-slate-500 hover:text-black hover:underline dark:hover:text-white"
              >
                C/C++
              </CustomLink>
            </li>
            <li>
              <CustomLink
                href="https://nextjs.org/"
                className="text-slate-500 hover:text-black hover:underline dark:hover:text-white"
              >
                NextJS
              </CustomLink>
            </li>
            <li>
              <CustomLink
                href="https://tailwindcss.com/"
                className="text-slate-500 hover:text-black hover:underline dark:hover:text-white"
              >
                Tailwind CSS
              </CustomLink>
            </li>
            <li>
              <CustomLink
                href="https://www.python.org/"
                className="text-slate-500 hover:text-black hover:underline dark:hover:text-white"
              >
                Python
              </CustomLink>
            </li>
            <li>
              <CustomLink
                href="https://www.djangoproject.com/"
                className="text-slate-500 hover:text-black hover:underline dark:hover:text-white"
              >
                Django
              </CustomLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
