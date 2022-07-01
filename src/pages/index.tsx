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
        <main className="w-max-2xl mx-auto">
          <Hero />
          <Section id="about">
            <h2 className="mt-3 ml-64 flex justify-start text-3xl">About Me</h2>
            <div className="m-auto mt-64 flex h-max w-1/2 flex-col justify-center">
              <p className="mb-6">
                Thanks for coming take a look at my site, my name is Alex, and I
                have an interest in all things computer Graphics and Web
                Development!
              </p>
              <p className="mb-6">
                I am currently working as a support technician for the WordPress
                hosting company and digital experience platform WP Engine, but
                in my spare time I enjoy learing about and messing around with
                any software that is browser, server, or GPU related.
              </p>
              <p className="mb-6">
                Right now I am playing about with technologies like:
              </p>
              <ul className="ml-12 grid list-disc grid-cols-2 gap-2">
                <li>OpenGL</li>
                <li>C/C++</li>
                <li>NextJS</li>
                <li>Tailwind CSS</li>
                <li>Python</li>
                <li>Django</li>
              </ul>
            </div>
          </Section>
          <Section id="projects" className="flex flex-col justify-between">
            <h2 className="mt-3 mr-64 flex justify-end text-3xl">Projects</h2>
            <div className="m-auto grid grid-cols-2 gap-12">
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
