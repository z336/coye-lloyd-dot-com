import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'mjtlcb9d',
  dataset: 'production',
  apiVersion: '2022-02-21',
  useCdn: true,
});
