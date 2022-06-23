import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Alexander Burns</title>
      </Head>
      <div className="flex flex-col h-screen">
        <Header />
        <p className="flex-grow"></p>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
