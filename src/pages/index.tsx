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
        <main className="container mx-auto">
          <Hero />
          <Section id="about">
            <div className="m-auto flex h-full w-2/3 flex-col items-center justify-center md:w-1/2">
              <h2 className="my-3 text-2xl md:text-3xl">About Me</h2>
              <div>
                <p className="my-3">
                  Thanks for coming to take a look at my site, my name is Alex,
                  and I have an interest in all things computer Graphics and Web
                  Development!
                </p>
                <p className="my-3">
                  I am currently working as a support technician for the
                  WordPress hosting company and digital experience platform WP
                  Engine, but in my spare time I enjoy learing about and messing
                  around with any software that is browser, server, or GPU
                  related.
                </p>
                <p className="my-3">
                  Right now I am playing about with technologies like:
                </p>
                <ul className="gap-x my-3 grid w-96 list-disc grid-cols-2 p-6">
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
          <Section id="projects">
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
          </Section>
        </main>
      </div>
    </>
  );
};

export default Home;
