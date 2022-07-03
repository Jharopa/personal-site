import Image from 'next/image';

import CustomLink from './Link';

interface ProjectCardProps {
  href: string;
  imageSrc: string;
  title: string;
  description: string;
}

const ProjectCard = ({
  href,
  imageSrc,
  title,
  description,
}: ProjectCardProps) => {
  return (
    <>
      <CustomLink href={href}>
        <div className="max-w-xs border border-black text-slate-500 hover:text-black dark:border-white dark:hover:text-white">
          <Image
            className="object-cover object-center"
            src={imageSrc}
            alt={title}
            width={1600}
            height={900}
          />
          <div className="w-full px-3 py-2">
            <h3 className="mb-3 flex text-center text-2xl font-bold">
              {title}
            </h3>
            <p className="mb-3">{description}</p>
          </div>
        </div>
      </CustomLink>
    </>
  );
};

export default ProjectCard;
