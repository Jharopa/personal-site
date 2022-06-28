import Head from 'next/head';
import z from 'zod';

const MetaDataValidator = z.object({
  title: z.string(),
  description: z.string(),
  imageURL: z.string(),
  URL: z.string(),
});

export type MetaData = z.infer<typeof MetaDataValidator>;

const SEO = ({ metaData }: { metaData: MetaData }) => {
  if (!MetaDataValidator.parse(metaData)) return null;

  return (
    <Head>
      <title>{metaData.title}</title>
      <meta name="title" content={metaData.title} />
      <meta name="description" content={metaData.description} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaData.title} />
      <meta property="og:description" content={metaData.description} />
      <meta property="og:image" content={metaData.imageURL} />
      <meta property="og:url" content={metaData.URL} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={metaData.title} />
      <meta property="twitter:description" content={metaData.description} />
      <meta property="twitter:image" content={metaData.imageURL} />
      <meta property="twitter:url" content={metaData.URL} />
    </Head>
  );
};

export default SEO;
