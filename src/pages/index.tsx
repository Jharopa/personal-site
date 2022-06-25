import PageTitle from 'components/PageTitle';
import Layout from 'components/Layout';
import Hero from 'components/Hero';

const Home = () => {
  return (
    <>
      <PageTitle title="Home" />
      <Layout>
        <Hero />
      </Layout>
    </>
  );
};

export default Home;
