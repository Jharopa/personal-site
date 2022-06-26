import NavLink from './NavLink';

const Header = () => {
  return (
    <>
      <header className="fixed top-0 z-[100] flex h-16 w-screen items-center justify-center bg-[#000000]">
        <nav>
          <div className="flex h-16 w-96 items-center justify-evenly">
            <NavLink href="/">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="https://github.com/Jharopa">Resume</NavLink>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
