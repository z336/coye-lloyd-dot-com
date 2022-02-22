import { RiQuillPenLine } from 'react-icons/ri';

export default {
  name: 'page',
  icon: RiQuillPenLine,
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the page.',
    },
    {
      name: 'image',
      title: 'Main Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          validation: (Rule) =>
            Rule.required().error(
              `Add Alternative text for the visually impaired`
            ),
        },
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
        },
      ],
      options: { hotspot: true },
      description: 'The image we want to show on this page.',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      description: 'The content we show on this page.',
    },
  ],
};
