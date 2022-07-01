interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

const Section = ({ id, children, className }: SectionProps) => {
  const style: string = 'h-screen w-full pt-20';

  if (id) {
    return (
      <div id={id} className={className ? className.concat(' ', style) : style}>
        {children}
      </div>
    );
  }

  return (
    <div className={className ? className.concat(' ', style) : style}>
      {children}
    </div>
  );
};

export default Section;
