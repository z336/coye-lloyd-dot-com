import { GiLightProjector } from 'react-icons/gi';

export default {
  name: 'feature',
  icon: GiLightProjector,
  title: 'Feature',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
  ],
};
