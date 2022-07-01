import Link from 'next/link';

interface LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const CustomLink = ({ href, className, children }: LinkProps) => {
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
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={className}
    >
      {children}
    </a>
  );
};

export default CustomLink;
