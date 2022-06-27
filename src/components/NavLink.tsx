import Link from 'next/link';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const isInternal = href.startsWith('/');
  const isAnchor = href.startsWith('#');
  const className =
    'text-m font-medium text-slate-300 hover:text-white hover:underline';

  if (isInternal || isAnchor) {
    return (
      <Link href={href}>
        <a className={className}>{children}</a>
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export default NavLink;
