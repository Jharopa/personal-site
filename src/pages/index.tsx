import PageTitle from 'components/PageTitle';
import Layout from 'components/Layout';
import Hero from 'components/Hero';
import Section from 'components/Section';
import Footer from 'components/Footer';

const Home = () => {
  return (
    <>
      <PageTitle title="Home" />
      <Layout>
        <Hero />
        <Section id="about">
          <h1 className="mt-3 mr-10 flex justify-end text-3xl">About</h1>
        </Section>
        <Section id="projects">
          <h1 className="mt-3 ml-10 flex justify-start text-3xl">Projects</h1>
          <Footer />
        </Section>
      </Layout>
    </>
  );
};

export default Home;
