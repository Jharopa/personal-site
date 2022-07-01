import Link from 'next/link';

interface NavLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const NavLink = ({ href, className, children }: NavLinkProps) => {
  const isInternal = href.startsWith('/');
  const isAnchor = href.startsWith('#');

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
