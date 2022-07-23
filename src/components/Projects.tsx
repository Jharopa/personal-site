import Footer from './Footer';
import ProjectCard from './ProjectCard';

import projects from 'lib/data/projects';

const Projects = () => {
  return (
    <div className="flex h-full flex-col items-center justify-between">
      <h2 className="mt-20 mb-4 text-2xl md:text-3xl">Projects</h2>
      <div className="grid grid-cols-1 items-center justify-evenly gap-10 md:grid-cols-2">
        {projects.map(({ key, href, imageSrc, title, description }) => (
          <ProjectCard
            key={key}
            href={href}
            imageSrc={imageSrc}
            title={title}
            description={description}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
