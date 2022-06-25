import PageTitle from 'components/PageTitle';
import Layout from 'components/Layout';
import Hero from 'components/Hero';
import Section from 'components/Section';

const Home = () => {
  return (
    <>
      <PageTitle title="Home" />
      <Layout>
        <Hero />
        <Section id="about">
          <h1 className="flex flex-row justify-center">About</h1>
        </Section>
        <Section id="projects">
          <h1 className="flex flex-row justify-center">Projects</h1>
        </Section>
      </Layout>
    </>
  );
};

export default Home;
