import Hero from 'components/Hero';
import Section from 'components/Section';
import Header from 'components/Header';
import Footer from 'components/Footer';
import SEO, { MetaData } from 'components/SEO';
import ProjectCard from 'components/ProjectCard';
import projects from 'lib/constants/projects';
import { meta } from 'lib/constants/meta';

const Home = () => {
  const metaData: MetaData = meta;

  return (
    <>
      <SEO metaData={metaData} />
      <div className="flex h-screen flex-col justify-between">
        <Header />
        <main className="mx-auto md:w-2/3">
          <Hero />
          <Section id="about">
            <div className="mx-auto flex h-2/3 max-w-3xl flex-col items-center justify-center">
              <h2 className="mb-20 text-3xl">About Me</h2>
              <div className="mx-20">
                <p className="mb-4">
                  Thanks for coming to take a look at my site, my name is Alex,
                  and I have an interest in all things computer Graphics and Web
                  Development!
                </p>
                <p className="mb-4">
                  I am currently working as a support technician for the
                  WordPress hosting company and digital experience platform WP
                  Engine, but in my spare time I enjoy learing about and messing
                  around with any software that is browser, server, or GPU
                  related.
                </p>
                <p className="mb-8">
                  Right now I am playing about with technologies like:
                </p>
                <ul className="mx-auto grid w-2/3 list-disc gap-x-4 sm:grid-cols-1 md:grid-cols-2">
                  <li>OpenGL</li>
                  <li>C/C++</li>
                  <li>NextJS</li>
                  <li>Tailwind CSS</li>
                  <li>Python</li>
                  <li>Django</li>
                </ul>
              </div>
            </div>
          </Section>
          <Section
            id="projects"
            className="flex flex-col items-center justify-between"
          >
            <h2 className="my-10 text-3xl">Projects</h2>
            <div className="grid items-center justify-between gap-10 sm:grid-cols-1 md:grid-cols-2">
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
          </Section>
        </main>
      </div>
    </>
  );
};

export default Home;
