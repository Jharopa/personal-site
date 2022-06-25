interface SectionProps {
  id?: string;
  children: React.ReactNode;
}

const Section = ({ children, id }: SectionProps) => {
  const className: string = 'h-screen w-full py-20';

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
