import Image from 'next/image';
import { BiLinkExternal } from 'react-icons/bi';

import NavLink from './NavLink';

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
      <NavLink href={href}>
        <div className="max-w-xs border border-black text-slate-500 hover:text-white dark:border-white">
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
      </NavLink>
    </>
  );
};

export default ProjectCard;
