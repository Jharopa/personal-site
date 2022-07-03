import dynamic from 'next/dynamic';

const LazyModelCanavas = dynamic(() => import('./ModelCanvas'), {
  ssr: false,
  loading: () => <div>Loading</div>,
});

const About = () => {
  return (
    <>
      <div className="m-auto flex h-full w-2/3 flex-col items-center justify-center md:w-1/2">
        <LazyModelCanavas />
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
            spare time I enjoy learing about and messing around with any
            software that is browser, server, or GPU related.
          </p>
          <p className="my-3">
            Right now I am playing about with technologies like:
          </p>
          <ul className="gap-x my-3 grid w-96 list-disc grid-cols-2 p-6">
            <li>OpenGL</li>
            <li>C/C++</li>
            <li>NextJS</li>
            <li>Tailwind CSS</li>
            <li>Python</li>
            <li>Django</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;