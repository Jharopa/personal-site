import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="fixed flex items-center justify-center top-0 z-[100] w-screen h-16 bg-[#041421]">
        <nav>
          <ul className="flex items-center justify-evenly w-96 h-16">
            <li className="text-m font-bold hover:underline hover:text-[#D0D6D6]">
              <Link href="/#">
                Home
              </Link>
            </li>

            <li  className="text-m font-bold hover:underline hover:text-[#D0D6D6]">
              <Link href="/#">
                About
              </Link>
            </li>

            <li  className="text-m font-bold hover:underline hover:text-[#D0D6D6]">
              <Link href="/#">
                Projects
              </Link>
            </li>

            <li  className="text-m font-bold hover:underline hover:text-[#D0D6D6]">
              <Link href="/#">
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
