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
      description: 'The title of the piece of work.',
      validation: (Rule) => Rule.required().error(`Add a title.`),
    },
    {
      name: 'featured',
      title: 'Is this the featured work?',
      type: 'boolean',
      description: 'Only one work is marked as featured at a time.',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      description: 'The link to the external site.',
      validation: (Rule) => Rule.required().error(`Add a link.`),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
  ],
};
