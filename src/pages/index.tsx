import PageTitle from 'components/PageTitle';
import Layout from 'components/Layout';
import Button from 'components/Button';

const Home = () => {
  return (
    <>
      <PageTitle title="Home" />
      <Layout>
        <Button href="/projects">Projects</Button>
      </Layout>
    </>
  );
};

export default Home;
