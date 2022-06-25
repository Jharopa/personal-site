import Section from './Section';

const Hero = () => {
  return (
    <Section>
      <div className="my-56 flex h-2/3 flex-col">
        <p className="pb-3">Hey there! I'm</p>
        <h1 className="pb-3 text-6xl">Alexander Burns</h1>
        <h1 className="text-6xl">I love all things computers.</h1>
      </div>
    </Section>
  );
};

export default Hero;
