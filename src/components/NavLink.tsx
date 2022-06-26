import { motion } from 'framer-motion';
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
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 1.0 }}
          className={className}
        >
          {children}
        </motion.a>
      </Link>
    );
  }

  return (
    <motion.a
      href={href}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.0, delay: 1.0 }}
      className={className}
    >
      {children}
    </motion.a>
  );
};

export default NavLink;
