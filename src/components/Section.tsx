interface SectionProps {
  id?: string;
  children: React.ReactNode;
}

const Section = ({ children, id }: SectionProps) => {
  const className: string =
    'flex flex-col justify-between h-screen w-full pt-20';

  if (id) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  return <div className={className}>{children}</div>;
};

export default Section;
