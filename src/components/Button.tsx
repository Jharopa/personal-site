import Link from 'next/link';

const Button = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href}>
      <a
        role="button"
        href={href}
        className="b-white flex items-center justify-center rounded border border-white bg-black px-2 py-1 hover:bg-slate-800"
      >
        {children}
      </a>
    </Link>
  );
};

export default Button;
