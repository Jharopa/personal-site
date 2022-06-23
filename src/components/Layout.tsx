import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-between min-h-screen">
        <main className='w-2/3 mx-auto mt-20'>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
