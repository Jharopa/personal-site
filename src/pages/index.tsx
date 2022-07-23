import Header from 'components/Header';
import Hero from 'components/Hero';
import Section from 'components/Section';
import SEO, { MetaData } from 'components/SEO';
import About from 'components/About';
import Projects from 'components/Projects';

import { meta } from 'lib/data/meta';

const Home = () => {
  const metaData: MetaData = meta;

  return (
    <>
      <SEO metaData={metaData} />
      <Header />
      <main className="container mx-auto">
        <Hero />
        <Section id="about">
          <About />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
      </main>
    </>
  );
};

export default Home;
