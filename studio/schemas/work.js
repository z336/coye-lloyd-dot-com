import { MdOutlineLink } from 'react-icons/md';

export default {
  name: 'work',
  icon: MdOutlineLink,
  title: 'Work',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'featured',
      title: 'Is this the featured work?',
      type: 'boolean',
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
