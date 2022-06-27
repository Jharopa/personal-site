import React from 'react';

import Header from './Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex h-screen flex-col justify-between">
        <Header />
        <main className="w-max-2xl mx-auto">{children}</main>
      </div>
    </>
  );
};

export default Layout;
