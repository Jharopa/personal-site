import CustomLink from './Link';

const Nav = () => {
  const style =
    'text-m font-medium text-slate-400 hover:text-black hover:dark:text-white hover:underline';
  return (
    <nav>
      <div className="flex h-16 w-96 items-center justify-evenly">
        <CustomLink href="/" className={style}>
          Home
        </CustomLink>
        <CustomLink href="#about" className={style}>
          About
        </CustomLink>
        <CustomLink href="#projects" className={style}>
          Projects
        </CustomLink>
        <CustomLink href="/static/CV.pdf" className={style}>
          Resume
        </CustomLink>
      </div>
    </nav>
  );
};

export default Nav;
