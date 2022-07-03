import Nav from './Nav';

const Header = () => {
  return (
    <header className="fixed z-[100] flex h-16 w-screen items-center justify-center bg-white dark:bg-black">
      <Nav />
    </header>
  );
};

export default Header;
