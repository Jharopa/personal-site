import Layout from 'components/Layout';
import Hero from 'components/Hero';
import Section from 'components/Section';
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
      <Layout>
        <Hero />
        <Section id="about">
          <h2 className="mt-3 mr-10 flex justify-start text-3xl">About</h2>
        </Section>
        <Section id="projects" className="flex flex-col justify-between">
          <h2 className="mt-3 ml-10 flex justify-end text-3xl">Projects</h2>
          <div className="grid grid-cols-2 gap-8">
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
      </Layout>
    </>
  );
};

export default Home;
