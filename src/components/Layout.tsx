import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex h-screen flex-col justify-between">
        <Header />
        <main className="mx-auto mt-20 w-2/3">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
