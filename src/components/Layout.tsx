import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <Header />
        <main className="w-2/3 mx-auto mt-20">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
