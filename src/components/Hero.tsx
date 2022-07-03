import Section from './Section';

const Hero = () => {
  return (
    <Section>
      <div className="m-auto flex h-full flex-col items-center justify-center text-center">
        <p className="pb-3 text-lg">Hey there! I&apos;m</p>
        <h1 className="animate-text bg-gradient-to-r from-teal-500 via-indigo-500 to-pink-500 bg-clip-text pb-16 text-5xl text-transparent md:text-7xl">
          Alexander Burns
        </h1>
        <p className="pb-3 text-center text-lg">What I like,</p>
        <h1 className="pb-3 text-center text-3xl md:text-5xl">
          3D Graphics Programming.
        </h1>
        <h1 className="text-center text-3xl md:text-5xl">Web Development.</h1>
      </div>
    </Section>
  );
};

export default Hero;
