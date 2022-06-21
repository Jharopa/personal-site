import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="flex justify-between w-full h-16">
        <nav className="flex justify-around w-full">
          <div className="flex items-center justify-between w-96">
            <Link href="/#">Home</Link>
            <Link href="/#">About</Link>
            <Link href="/#">Projects</Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
