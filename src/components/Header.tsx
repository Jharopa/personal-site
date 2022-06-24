import Link from 'next/link';

const Header = () => {
  return (
    <>
      <header className="fixed top-0 z-[100] flex h-16 w-screen items-center justify-center bg-[#000000]">
        <nav>
          <ul className="flex h-16 w-96 items-center justify-evenly">
            <li className="text-m font-medium hover:text-[#800035] hover:underline">
              <Link href="/">Home</Link>
            </li>

            <li className="text-m font-medium hover:text-[#800035] hover:underline">
              <Link href="/about">About</Link>
            </li>

            <li className="text-m font-medium hover:text-[#800035] hover:underline">
              <Link href="/projects">Projects</Link>
            </li>

            <li className="text-m font-medium hover:text-[#800035] hover:underline">
              <Link href="https://github.com/Jharopa">Resume</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
